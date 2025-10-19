"use client";
import React, { useEffect, useState } from "react";
import { getProduct } from "../../../../actions/get-products";
import Link from "next/link";

const page = (params: { id: string }) => {
  const [productData, setProductData] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(params.id);
      console.log(product);
      setProductData(product);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Link href="/">
        <div className=" cursor-pointer p-5 ">Back</div>
      </Link>

      {productData && (
        <div className=" border text-black">{productData.name}</div>
      )}
    </div>
  );
};

export default page;
