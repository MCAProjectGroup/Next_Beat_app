import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/request";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrackPlayer from "react-native-track-player";


export const getProfileData = createAsyncThunk(
    "auth/getProfileData",
    async(_,{rejectWithValue})=>{
        try {
            const res = await request("get","user/main/profile");
            console.log("profile fulfilled");
            return res.data.data
            
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
            // state.token = payload.access_token;
            // state.user = payload.user
            console.log({payload});
            state.token = payload.token
            AsyncStorage.setItem("@token", state.token);
        },
        updateUser:(state,{payload})=>{
            state.user = payload
        },
        LogoutSuccessfully:(state)=>{
            state.token = "";
            state.user = {};
            AsyncStorage.removeItem("@token");
            TrackPlayer.reset();
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