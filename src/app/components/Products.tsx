"use client";
import useGetData from "@/app/hooks/useGetData";
import { TGetData } from "@/app/lib/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Search from "./Search";

export default function Products() {
  const { data, error, loading }: TGetData = useGetData();

  return (
    <div className="flex flex-col items-center justify-start gap-3">

      <Search placeholder="Search product" />
      <div>
        {loading && <div> Loading ...</div>}
        {error && <div>🚫</div>}
        {data && (
          <div className="mb-3 grid-cols-3 grid gap-3" >
            {data.map((product) => (
              <Card className="flex flex-col py-4 gap-3" key={product.id}>
                <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                  <p className="text-tiny font-bold uppercase">
                    {product.title}
                  </p>
                  <small className="text-default-500">
                    {product.currency} {product.price}
                  </small>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt={product.title}
                    className="rounded-xl object-cover self-center"
                    src={product.image}
                    width={270}
                    height={-1}
                  />
                </CardBody>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
