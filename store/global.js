import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Request } from "../config/Request";

export const getDeliveryServicesOptions = createAsyncThunk(
    "global/getDeliveryServicesOptions",
    async({city_id, latitude, longitude},{rejectWithValue})=>{
        try {
            // https://fako-api.idiosysdev.com/api/v1/user/delivery/services?type=1&latitude=22.5805032&longitude=88.4361977&city_id=5583
            // const res = await Request("get",`/store/list/1?filter=&city_id=${city_id}&longitude=${longitude}&latitude=${latitude}`)
            const res = await Request("get",`/delivery/services?type=1&latitude=${latitude}&longitude=${longitude}&city_id=${city_id}`)
            // console.log(`/store/list/1?filter=&city_id=${city_id}`+ " fullfilled", res.data.responseData);
            console.log(`/delivery/services?type=1&latitude=${latitude}&longitude=${longitude}&city_id=${city_id}`+ " fullfilled");
            return res.data.responseData
        } catch (error) {
            console.log(`/delivery/services?type=1&latitude=${latitude}&latitude=22.5805032&longitude=88.4361977city_id=${city_id}`+" failed");

            rejectWithValue(error.toString())
        }
    }
);
export const getDeliveryPackagesOptions = createAsyncThunk(
    "global/getDeliveryPackagesOptions",
    async(_,{rejectWithValue})=>{
        try {
            // https://fako-api.idiosysdev.com/api/v1/user/delivery/package/types
            // const res = await Request("get",`/store/list/1?filter=&city_id=${city_id}&longitude=${longitude}&latitude=${latitude}`)
            const res = await Request("get",`/delivery/package/types`)
            // console.log(`/store/list/1?filter=&city_id=${city_id}`+ " fullfilled", res.data.responseData);
            console.log(`/delivery/package/types`+ " fullfilled");
            return res.data.responseData
        } catch (error) {
            console.log(`/delivery/package/types`+" failed");

            rejectWithValue(error.toString())
        }
    }
);
export const getAvailablePaymentModes=createAsyncThunk(
    "global/getAvailablePaymentModes",
    async(_,{rejectWithValue})=>{
        console.log("getAvailablePaymentModes called")
        try {
            const res = await Request("get",`/paymode`)
            console.log(`/paymode`+ " fullfilled",res.data.responseData);
            return res.data.responseData
        } catch (error) {
            console.log(`/paymode`+" failed");
            rejectWithValue(error.toString())
        }
    }
 )
const slice = createSlice({
    name:"global",
    initialState:{
        inputFocus:false,
        loader:false,
        delivery_services:[],
        packageType:[],
        availablePaymentOrder:[],
        availablePaymentDelivery:[],
        paymentEnableForDelivery:{
            cash:false,
            card:false,
            momo:false
        },
        paymentEnableForOrder:{
            cash:false,
            card:false,
            momo:false
        }

    },
    reducers:{
        SetInputFocus:(state,{payload})=>{
            state.inputFocus=payload;
        },
        setScreenLoaderTrue : (state,{payload})=>{
            state.loader=true
        },
        setScreenLoaderFalse : (state)=>{
            state.loader=false
        }
    },
    extraReducers:{
        [getDeliveryServicesOptions.fulfilled]:(state,{payload})=>{
            state.delivery_services= payload.services
            // console.log(payload.services);
        },
        [getDeliveryPackagesOptions.fulfilled]:(state,{payload})=>{
            state.packageType= payload
            // console.log(payload.services);
        },
        [getAvailablePaymentModes.fulfilled]:(state,{payload})=>{
            state.availablePaymentOrder= payload.order
            state.availablePaymentDelivery= payload.delivery
            let momo,card,cash =false;
            payload.delivery.map((item)=>{
                switch (item.name) {
                    case "cash":
                        cash=item.status==="1";
                        break;
                    case "card":
                        card=item.status==="1";
                        break;
                    case "momo":
                        momo=item.status==="1";
                        break;
                
                    default:
                        break;
                }
            })
            state.paymentEnableForDelivery={
                card,
                cash,
                momo
            }
            payload.order.map((item)=>{
                switch (item.name) {
                    case "cash":
                        cash=item.status==="1";
                        break;
                    case "card":
                        card=item.status==="1";
                        break;
                    case "momo":
                        momo=item.status==="1";
                        break;
                
                    default:
                        break;
                }
            })
            state.paymentEnableForOrder={
                card,
                cash,
                momo
            }
            // console.log("payload.order",momo,card,cash ,payload.delivery);
            
        }
    }
});

export const {SetInputFocus, setScreenLoaderFalse, setScreenLoaderTrue} = slice.actions;

export default slice.reducer;