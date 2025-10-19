"use client";
import React, { useEffect, useState } from "react";
import { CartItem } from "@/store/cart-contex";
import { getProducts } from "../../actions/get-products";
import ProductGrid from "@/components/homepage/product-grid";
import Navbar from "@/components/homepage/nav-bar";

const page = () => {
  const [item, setItem] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setItem(products[0] as CartItem);
      console.log(products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <ProductGrid items={item ? [item] : []} />
    </div>
  );
};

export default page;
