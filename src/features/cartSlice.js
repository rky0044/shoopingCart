import { createSlice } from "@reduxjs/toolkit";
import productData from "../productData"

const initialState = {
    cart:[],
    items:productData,
    totalQuntity:0,
    totlaPrice:0,
    
};


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        }

    }
});

export const {addToCart}= cartSlice.actions;

export default cartSlice.reducer;