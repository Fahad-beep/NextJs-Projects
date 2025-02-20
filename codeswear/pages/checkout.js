import React from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { BsFillBagCheckFill } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

const Checkout = ({
  cart,
  subTotal,
  clearCart,
  saveCart,
  addToCart,
  removeFromCart,
}) => {
  return (
    <>
      <div className="container px-2 sm:m-auto">
        <h1 className="text-3xl font-bold my-8 text-center">Checkout</h1>
        <h2 className="font-semibold text-xl">1. Delivery Details</h2>
        <div className="mx-auto my-2 flex flex-wrap">
          <div className="w-1/2 pr-2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="2"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <div className="m-auto flex">
          <div className="w-1/2 pr-2">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <div className="mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="city"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="m-auto flex mb-10">
          <div className="w-1/2 pr-2">
            <div className="mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="state"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="w-1/2 pl-2">
            <div className="mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pin-Code
              </label>
              <input
                type="pincode"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <h2 className="font-semibold text-xl">2. Review Cart Items</h2>
        <div className=" bg-pink-100 m-2 ml-0 p-2">
          <ol className="list-decimal font-semibold ml-6">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 ml-2 font-semibold">
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
                  <div className="item flex font-semibold my-5">
                    <div className="">{cart[k].name}</div>
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
          <div className="font-bold ml-2">Sub-Total: Rs.{subTotal}</div>
        </div>
        <div className="flex my-4">
          <Link href="/checkout">
            {" "}
            <button className="w-[170px] flex mx-2 text-white bg-blue-950 hover:bg-pink-600 border-0 py-2 px-3 focus:outline-none  rounded text-base">
              <BsFillBagCheckFill className="flex items-center justify-center m-1 ml-0" />
              Pay Rs.{subTotal}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Checkout;
