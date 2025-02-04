import React from "react";
import { useRouter } from "next/router";
const Tshirts = () => {
  const router = useRouter();
  return (
    <div>
      <section className="text-black-500 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer"
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className=" h-[47vh] block m-auto "
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  The Catalyzer
                </h2>
                <p className="mt-1 text-center text-grey-500">$16.00</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  Shooting Stars
                </h2>
                <p className="mt-1 text-center text-grey-500">$21.15</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  Neptune
                </h2>
                <p className="mt-1 text-center text-grey-500">$12.00</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  The 400 Blows
                </h2>
                <p className="mt-1 text-center text-grey-500">$18.40</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  The Catalyzer
                </h2>
                <p className="mt-1 text-center text-grey-500">$16.00</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  Shooting Stars
                </h2>
                <p className="mt-1 text-center text-grey-500">$21.15</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  Neptune
                </h2>
                <p className="mt-1 text-center text-grey-500">$12.00</p>
              </div>
            </div>
            <div
              className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5 cursor-pointer "
              onClick={() => {
                console.log("clicked");
                router.push("/product/wear-the-code");
              }}
            >
              <a className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="h-[47vh] block m-auto"
                  src="https://m.media-amazon.com/images/I/51vvFnCAijL._AC_SX679_.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-grey-500 text-xs tracking-widest title-font mb-1 text-center">
                  CATEGORY
                </h3>
                <h2 className="text-black title-font text-lg font-medium text-center">
                  The 400 Blows
                </h2>
                <p className="mt-1 text-center text-grey-500">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tshirts;
