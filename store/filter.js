import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name:"filter",
    initialState:{
        data:[],
        apply:0,
        for:"",
        // loaderBtn:{
        //     name:"",
        //     status:false
        // },
        
    },
    reducers:{
        initializeFilterArray:(state,{payload})=>{
            console.log(state, payload);
            if(payload.for !== state.for){
                state.for= payload.for;
                for(i=0;i<payload.length; i++){
                    state.data[i]=[];
    
                }
            }
        },
        updateFilterArray : (state,{payload})=>{
            if(!payload.multiple){
                state.data[payload.index][0]=payload.data
            }else{

                let exist = state.data[payload.index].indexOf(payload.data)
                console.log(exist);
                if(exist>=0)
                state.data[payload.index].splice(exist,1);
                else{
                    // console.log("adasd");
                    state.data[payload.index][state.data[payload.index].length] = payload.data
                }
            }

        },
        clearFilterArray : (state)=>{
            state.data=state.data.map(()=>[]);
            state.apply=0
        },
        AppliyFilter:(state)=>{
            state.apply++;

        }
    }
});

export const {initializeFilterArray, updateFilterArray, clearFilterArray,AppliyFilter} = slice.actions;

export default slice.reducer;