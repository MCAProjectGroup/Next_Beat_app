import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/request";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const getCategoryData = createAsyncThunk(
    "category/getCategoryData",
    async(_,{rejectWithValue})=>{
        try {
            const res = await request("get","user/categories");
            console.log("profile fulfilled");
            return res.data.data
            
        } catch (error) {
            console.log("profile failed");
            rejectWithValue(error)
        }
    }
)

const slice = createSlice({
    name:"category",
    initialState:{
        categories: [],
        
    },
    reducers:{
      
    },
    extraReducers:{
        [getCategoryData.fulfilled]:(state, {payload})=>{
            state.categories = payload
            // console.log({payload});
        }
    }
});

export const {LoginSuccessfully,LogoutSuccessfully,updateUser} = slice.actions;

export default slice.reducer;