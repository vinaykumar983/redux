import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import productReducer from './slices/productsSlice'




export const store=configureStore({

    //store contains all the states

    reducer:{
        users:userReducer,     //this is user state
        products:productReducer  //this is product state
    }
})

