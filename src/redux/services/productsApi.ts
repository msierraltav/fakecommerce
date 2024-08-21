import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { TProducts, TProduct } from "@/lib/types"

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<TProducts, { page: number, limit: number , sort: string }>({
            query: ({ page, limit, sort }) => `products?_page=${page}&_per_page=${limit}&_sort=${sort}`
        }),
        getProductsOrderByPrice: builder.query<TProducts, { order: "asc" | "desc" }>({
            query: ({ order }) => `products?_sort=price&_order=${order}`
        }),
        getProductById: builder.query<TProduct, { id: number }>({
            query: ({ id }) => `products/${id}`
        }),
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;