"use client"
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { Product, TGetData } from "@/lib/types";
import {useAppDispatch, useAppSelector} from "@/hooks/useReduxHooks"

interface ProductsListProps {
  productsData: TGetData;
}

export default function ProductsList({
  productsData,
}: ProductsListProps) {

  const currentPage = useAppSelector(state => state.paginationReducer.currentPage);
  const query = useAppSelector(state => state.paginationReducer.stringQuery);
  const { data, loading, error } = productsData;

  console.log("currentpage", currentPage);


  let products : Product[] | undefined;

  if(query){
    const filterProducts = data?.filter((product : Product ) => {
      if(product.title.toLowerCase().includes(query.toLowerCase())){
        return product;
      }
    });
    products = filterProducts;
  } else{
    products = data;
  }

  return (
    <div>
      {loading && <div> Loading ...</div>}
      {error && <div>🚫</div>}
      {products && products.length > 0 ?(
        <div className="mb-3 grid grid-cols-5 gap-3">
          {products?.map((product) => (
            <Card
              className="flex flex-col content-between gap-3 py-4"
              key={product.id}
            >
              <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <p className="text-tiny font-bold uppercase">{product.title}</p>
                <small className="text-default-500">
                  {product.currency} {product.price}
                </small>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt={product.title}
                  className="self-center rounded-xl object-cover"
                  src={product.image}
                  width={270}
                  height={-1}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (<div className="mb-3 grid grid-cols-5 gap-3"> No Data... </div>)}
    </div>
  );
}
