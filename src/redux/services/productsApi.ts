import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Products, Product } from "@/lib/types"

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Products, { page: number, limit: number }>({
            query: ({ page, limit }) => `products?_page=${page}&_per_page=${limit}`
        }),
        getProductsOrderByPrice: builder.query<Products, { order: "asc" | "desc" }>({
            query: ({ order }) => `products?_sort=price&_order=${order}`
        }),
        getProductById: builder.query<Product, { id: number }>({
            query: ({ id }) => `products/${id}`
        }),
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;