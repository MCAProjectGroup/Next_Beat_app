import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name:"temp_booking",
    initialState:{
        dropLocations:[{}],
        polygon:{},
        car:-1,
        pickUpGeo:{},
        pickUpText:"",
        
    },
    reducers:{
        setCarType:(state, {payload})=>{
            state.car = payload
        },
        setPickUpGeo:(state, {payload})=>{
            state.pickUpGeo = payload
        },
        setPickUpText:(state, {payload})=>{
            state.pickUpText = payload
        },
        addNewAddress:(state,{payload})=>{
          
            state.dropLocations[payload.addressIndex]=payload

        },
        createNewAddressField:(state)=>{
            state.dropLocations.push({})
        },
        removeNewAddress:(state,{payload})=>{
            // let temp = AddressList;
            // temp.extraInfo.splice(index,1);
            // temp.geolocation.splice(index,1);
            // setAddressList(state=>({
            //     ...AddressList,
            //     extraInfo: [...temp],
            //     geolocation:[...temp],
            //     // polygon
            // }))
            // state.extraInfo.splice(payload, 1)
            // state.geolocation.splice(payload, 1)
            state.dropLocations.splice(payload,1)
        },
        resetTempBooking:(state)=>{
            state.dropLocations=[{}];
            state.polygon={};
            state.car=-1;
            // state.pickUpGeo={};
            // state.pickUpText="";
        },
        clearPickUp:(state)=>{
            state.pickUpGeo={};
            state.pickUpText=""
        }
       
    }
});

export const {addNewAddress, removeNewAddress, clearPickUp,setCarType, setPickUpGeo, setPickUpText, createNewAddressField,resetTempBooking} = slice.actions;

export default slice.reducer;