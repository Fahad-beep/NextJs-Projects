import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { BsFillBagCheckFill } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

const NavBar = ({
  cart,
  subTotal,
  clearCart,
  saveCart,
  addToCart,
  removeFromCart,
}) => {
  // console.log(cart, clearCart, saveCart, addToCart, removeFromCart, subTotal);
  const sidebarRef = useRef();
  const toggleCart = () => {
    if (sidebarRef.current.classList.contains("translate-x-full")) {
      sidebarRef.current.classList.remove("translate-x-full");
      sidebarRef.current.classList.add("translate-x-0");
    } else if (!sidebarRef.current.classList.contains("translate-x-full")) {
      sidebarRef.current.classList.remove("translate-x-0");
      sidebarRef.current.classList.add("translate-x-full");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col md:flex-row md:justify-start mb-[5px] py-2 shadow-xl sticky top-0 z-10 bg-white">
      <div className="logo mx-5">
        <Link href="/">
          <Image src="/displayLogo.png" width={200} height={40} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-md">
          <Link href="/tshirts">
            <li>T-Shirts</li>
          </Link>
          <Link href="/hoodies">
            <li>Hoodies</li>
          </Link>
          <Link href="/mugs">
            <li>Mugs</li>
          </Link>
          <Link href="/stickers">
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <CiShoppingCart
        className="text-xl absolute right-2 top-4 md:text-2xl cursor-pointer"
        onClick={toggleCart}
      />
      <div
        ref={sidebarRef}
        className={`sidebar w-[300px] h-[100vh] absolute right-0 top-0 bg-pink-100 py-4 px-7 z-10 ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } transform transition-transform`}
      >
        <h2 className="font-bold text-xl text-center">Subscription</h2>
        <div
          className="cancel absolute top-2 right-2 text-xl text-pink-500 cursor-pointer"
          onClick={toggleCart}
        >
          <AiFillCloseCircle />
        </div>
        <ol className="list-decimal font-semibold ml-1">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">
              No items present in the cart. Please add few items to checkout
            </div>
          )}
          {Object.keys(cart).map((k) => {
            console.log("k: ", k);
            console.log("cart[k]: ", cart[k]);
            console.log("cart: ", cart);
            console.log("Object.keys(cart): ", Object.keys(cart));
            return (
              <li key={k}>
                <div className="item flex font-semibold  my-5">
                  <div className="w-2/3">{cart[k].name}</div>
                  <div className="w-1/3 flex justify-center items-center ">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(k);
                      }}
                      className="text-xl cursor-pointer text-blue-950 hover:text-pink-600"
                    />
                    <span className="mx-2 text-xs">{cart[k].qty}</span>
                    <AiFillPlusCircle
                      onClick={() => {
                        // //(qty, name, price, varient, size, itemCode)
                        addToCart(
                          cart[k].qty,
                          cart[k].name,
                          cart[k].price,
                          cart[k].varient,
                          cart[k].size,
                          k
                        );
                      }}
                      className="text-xl cursor-pointer text-blue-950 hover:text-pink-600"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold  my-2 mb-3">Sub-Total: Rs.{subTotal}</div>
        <div className="flex">
          <Link href="/checkout">
            {" "}
            <button className="flex mx-2 text-white bg-blue-950 hover:bg-pink-600 border-0 py-2 px-3 focus:outline-none  rounded text-base">
              <BsFillBagCheckFill className="flex items-center justify-center m-1 ml-0" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mx-2 text-white bg-blue-950 hover:bg-pink-600 border-0 py-2 px-3 focus:outline-none  rounded text-base"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
