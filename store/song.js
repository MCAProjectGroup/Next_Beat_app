import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../utils/request";
import AsyncStorage from "@react-native-async-storage/async-storage";



const slice = createSlice({
    name:"song",
    initialState:{
        repeat: 0,
        
    },
    reducers:{
      setRepeat:(state)=>{
        state.repeat= (state.repeat + 1)%2;
      }
    },
  
});

export const {setRepeat} = slice.actions;

export default slice.reducer;