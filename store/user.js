import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RevGeolocation from "../utility/RevGeolocation";


export const getUserLocation = createAsyncThunk(
    "user/getUserLocation",
    async({lat,lng},{rejectWithValue})=>{
        // console.log("getUserLocation");
        try {
            const res = await RevGeolocation(lat, lng);
            // console.log("getUserLocation fulfilled",res.results[0]);
            console.log("getUserLocation fulfilled");

            return res.results[0]
            
        } catch (error) {
            console.log("user/getUserLocation",{error});
            rejectWithValue(JSON.stringify(error))
        }

        
    }
)


const slice = createSlice({
    name:"user",
    initialState:{
        location:{},
        language:"",
        shortLocation:"",
        geolocation:{},
        loading:false

    },
    reducers:{
        LoginSuccessfully:(state)=>{
            state.token = "1234567890"
        },
        setGeolocation:(state,{payload})=>{
            state.geolocation = payload
        },
    },
    extraReducers:{
        [getUserLocation.pending]:(state)=>{
            state.loading=true;
        },
        [getUserLocation.fulfilled]:(state,{payload})=>{
            state.loading=false;
            state.location=payload;
            // console.log(
            //     payload.address_components
            //     .filter(item=> (item.types.indexOf("locality")>=0 || item.types.indexOf("country")>=0)||false)
            //     .map(item=> item.short_name)
            // .join(", ")
            // );
            state.shortLocation =  payload.address_components.filter((_, index)=> index===1 || index===2 || false).map(item=> item.short_name).join(", ")
        }
    }
});

export const {LoginSuccessfully,setGeolocation} = slice.actions;

export default slice.reducer;