"use client";

import { useCartStore } from "@/store/cart-contex";

export const useCartHook = () => {
  const {
    items,
    quantity,
    addItem,
    removeItem,
    clearCart,
    getTotalPrice,
    getItemCount,
  } = useCartStore();

  return {
    items,
    quantity,
    addItem,
    removeItem,
    clearCart,
    getTotalPrice,
    getItemCount,
  };




  



};
