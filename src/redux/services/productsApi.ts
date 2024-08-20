import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Product} from "@/lib/types" 
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl : "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], null>({
            query: () => 'products'
        }),
        getProductById: builder.query<Product, {id: number}>({
            query: ({id}) => `products/${id}`
        })
    })
});

export const {useGetProductsQuery, useGetProductByIdQuery} = productsApi;