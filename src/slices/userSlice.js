import { createSlice } from "@reduxjs/toolkit";

//slices are the part of state

//slices are created using createSlice method


//reducers are used to update the state

//It contains a function which takes state and action as input,state is the current state and action contains type and payload

/* 
    structure of action 
    {
        type:xxxx,
        payload:[x,x,x,x]
    }

*/

export const userSlice=createSlice({
    name:"users",  
    initialState:[],
    reducers:{
        addUser:(state,action)=>{  //action creater function
            state.push(action.payload)
        }
    }
})


//exporting action creater function

export const {addUser} = userSlice.actions;


//this is the reducer where it contains all the details of slice so it can be used any where in the code whereever state is required


export default userSlice.reducer;