"use client";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import { useGetProductByIdQuery } from "@/redux/services/productsApi";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { addProduct } from "@/redux/features/cartSlice";
import { TProduct } from "@/lib/types";

interface ProductProps {
  params: {
    productId: number;
  };
}

export default function Product({ params }: ProductProps) {
  const {
    data: product,
    error,
    isSuccess,
    isLoading,
  } = useGetProductByIdQuery({
    id: params.productId,
  });

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: TProduct) => {
    dispatch(addProduct(product));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-normal gap-5 p-24">
      <Link href="/" className="flex w-full justify-self-start">
        <button className="btn btn-primary">Back</button>
      </Link>
      {error && <div> 🚫 </div>}
      {isLoading && <div> Loading... </div>}
      {isSuccess && product && (
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
            <small className="text-tiny font-bold uppercase">
              <span>⭐{product.rating}</span>
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
                            <div
                  onClick={() => handleAddToCart(product)}
                  className="cursor-pointer"
                >
                  ➕ Add to cart
                </div>
            <small> {product.description}</small>
          </CardBody>
        </Card>
      )}
    </main>
  );
}
