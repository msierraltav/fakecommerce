"use client"
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { Product, TGetData } from "@/lib/types";
import {useAppDispatch, useAppSelector} from "@/hooks/useReduxHooks"
import {useGetProductsQuery} from "@/redux/services/productsApi"
import {setCurrentPage} from "@/redux/features/paginationSlice";
import Link from "next/link";
import { Pagination } from "@nextui-org/react";


export default function ProductsList() {

  const dispatch = useAppDispatch();
  const page = useAppSelector(state => state.paginationReducer.currentPage);
  const limit = useAppSelector(state => state.paginationReducer.limit)
  const query = useAppSelector(state => state.paginationReducer.stringQuery);
  const {data, isLoading, error, isSuccess} = useGetProductsQuery({page:page, limit:limit});


  const handlePaginationChange  = (e : any) =>{
    dispatch(setCurrentPage(e));
  };

  let products : Product[] | undefined = [];

  if(query){
    const filterProducts = data?.data?.filter((product : Product ) => {
      if(product.title.toLowerCase().includes(query.toLowerCase())){
        return product;
      }
    });
    products = filterProducts;
  } else{
    products = data?.data;
  }

  return (
    <div>
      {isLoading && <div> Loading ...</div>}
      {error && <div>🚫</div>}
      {isSuccess && products && products.length > 0 ?(
        <div className="mb-3 grid grid-cols-5 gap-3">
          {products?.map((product) => (
            <Card
              className="flex flex-col content-between gap-3 py-4"
              key={product.id}
            >
              <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <Link href={`/product/${product.id}`}>
                  <p className="text-tiny font-bold uppercase">{product.title}</p>
                </Link>
                
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
      {data && (
        <Pagination color="success" showControls initialPage={page} total={data?.pages ?? 0} onChange={handlePaginationChange}/>
      )}
    </div>
  );
}
