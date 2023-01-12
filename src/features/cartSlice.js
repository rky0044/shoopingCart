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
            let find = state.cart.findIndex((item)=> item.id === action.payload.id);
            if(find >= 0){
                state.cart[find].quantity += 1;
            }else{

                state.cart.push(action.payload)
            }
        },

        getCartTotal:(state)=>{
            let {totalQuntity,totlaPrice} = state.cart.reduce(
                (cartTotle,cartItem)=>{
                    console.log(cartTotle,"carttotal");
                    console.log(cartItem,"cartItem");

                }
            )
        }

    }
});

export const {addToCart}= cartSlice.actions;

export default cartSlice.reducer;