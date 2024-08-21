"use client"
import Search from "./Search";
import { Suspense  } from "react";
import ProductsList from "./ProductsList";
import {useAppDispatch, useAppSelector} from "@/hooks/useReduxHooks"
import Sorting from "@/app/components/Sorting";

export default function Products() {

  const query = useAppSelector(state => state.paginationReducer.currentPage);
  const currentPage = useAppSelector(state => state.paginationReducer.currentPage);

  return (
    <div className="flex flex-col items-center justify-start gap-3">

      <Search placeholder="Search product" />
      <Sorting/>
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <ProductsList />
      </Suspense>

    </div>
  );
}
