import { CartItem } from "@/store/cart-contex";
import Link from "next/link";
import React from "react";

const ProductGrid = ({ items }: { items: CartItem[] }) => {
  return (
    <div className=" p-5">
      {items.map((item) => (
        <Link key={item.id} href={`/product/${item.id}`}>
          <div key={item.id} className=" w-60 aspect-square group">
            <img
              src={item.images[0].src}
              alt={item.name}
              className=" object-cover"
            />
            <div className=" flex justify-between items-end  opacity-0 group-hover:opacity-100 transition-all duration-200 ">
              <h2 className="text-sm  mt-2 max-w-40 truncate">{item.name}</h2>
              <p className="text-gray-600 text-sm">${item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
