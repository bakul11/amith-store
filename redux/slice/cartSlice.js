import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //add to cart 
        addToCart: (state, action) => {
            const isCart = state.cart.find((item) => item._id === action.payload._id);
            if (isCart) {
                isCart.qty++;

            } else {
                state.cart.push([{ ...action.payload, qty: 1 }])
                toast.success('Item add to cart success')
            }
        },

        // remove form cart 
        removeFormCart: (state, action) => {
            const removeProduct = state.cart.filter((item) => item._id !== action.payload);
            state.cart = removeProduct;
            toast.success('Item remove form cart success')
        },
        //quantity increment funtion
        incrementQty: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload);
            item.qty++;
            toast.success('Item quantity increment success')
        },
        //decremnt qty funtion
        decrementQty: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload);
            if (item.qty === 1) {
                item.qty = 1
            } else {
                item.qty--;
                toast.success('Item quantity decrement success')
            }
        }

    }

})
export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFormCart, incrementQty, decrementQty } = cartSlice.actions;