import { TProduct } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    items: TProduct[];
}

export const initialState: CartItem = {
    items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items = [...state.items, action.payload ];
    },
  }});
  
  export const {addProduct} = cartSlice.actions;
  export default cartSlice.reducer;
