import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/redux/features/paginationSlice";
import cartReducer from "@/redux/features/cartSlice";
import {productsApi} from "@/redux/services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const  store =  configureStore({
    reducer: {
        paginationReducer,
        cartReducer,
        [productsApi.reducerPath] : productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productsApi.middleware])
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;