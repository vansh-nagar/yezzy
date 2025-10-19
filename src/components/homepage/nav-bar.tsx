import { Dot, EllipsisVertical, X } from "lucide-react";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart-contex";

const navBar = [
  { name: "Hoodies", href: "/" },
  { name: "Shoes", href: "/shop" },
  { name: "Shirt", href: "/about" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { items, removeItem, clearCart, getTotalPrice } = useCartStore();

  return (
    <div className=" flex justify-between items-center inset-x-0 border h-16 px-5">
      <section
        onClick={() => {
          setToggle(!toggle);
        }}
        className=" cursor-pointer"
      >
        {toggle ? <EllipsisVertical /> : <X />}
      </section>

      {toggle && (
        <section>
          {navBar.map((item) => (
            <a key={item.name} href={item.href} className="mx-2">
              {item.name}
            </a>
          ))}
        </section>
      )}

      <section>
        <Sheet>
          <SheetTrigger className=" cursor-pointer">cart</SheetTrigger>
          <SheetContent className=" p-4">
            <SheetHeader>
              <SheetTitle> Your Cart</SheetTitle>
            </SheetHeader>
            <SheetContent className="p-3">
              {items.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                items.map((item) => (
                  <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                ))
              )}
            </SheetContent>
          </SheetContent>
        </Sheet>
      </section>
    </div>
  );
};

export default Navbar;
