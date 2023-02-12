import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Request } from "../config/Request";

export const getProfileData = createAsyncThunk(
    "auth/getProfileData",
    async(_,{rejectWithValue})=>{
        try {
            const res = await Request("get","/profile");
            console.log("profile fulfilled");
            return res.data.responseData
            
        } catch (error) {
            console.log("profile failed");
            rejectWithValue(error)
        }
    }
)

const slice = createSlice({
    name:"auth",
    initialState:{
        token:"",
        user:{}
    },
    reducers:{
        LoginSuccessfully:(state,{payload})=>{
            state.token = payload.access_token;
            state.user = payload.user
        },
        updateUser:(state,{payload})=>{
            state.user = payload
        },
        LogoutSuccessfully:(state)=>{
            state.token = "";
            state.user = {};
        },
    },
    extraReducers:{
        [getProfileData.fulfilled]:(state, {payload})=>{
            state.user = payload
            // console.log({payload});
        }
    }
});

export const {LoginSuccessfully,LogoutSuccessfully,updateUser} = slice.actions;

export default slice.reducer;