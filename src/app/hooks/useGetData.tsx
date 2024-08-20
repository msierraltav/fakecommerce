"use client"
import { SetStateAction, useEffect, useState } from "react";
import { Product, Products, TGetData } from "../lib/types";

//const URL = "https://my-json-server.typicode.com/msierraltav/fakecommerce/products"
const URL = "http://localhost:3000/products"

export default function useGetData() : TGetData {

  const [data, setData] = useState<Product[]>();
  const [error, setError] = useState<SetStateAction<any>>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFromApi = async () => {
        
        try {
          const response  = await fetch(URL);
          const result = await response.json()
          setData(result);
        } catch (error) {
          setError(error);
        } finally{
          setLoading(false);
        }
    };
    getFromApi();
  }, [])
  return { data, error, loading }
}