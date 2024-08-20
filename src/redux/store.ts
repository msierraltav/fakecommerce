import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "@/redux/features/paginationSlice";
import {productsApi} from "@/redux/services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";


export const  store =  configureStore({
    reducer: {
        paginationReducer,
        [productsApi.reducerPath] : productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productsApi.middleware])
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;