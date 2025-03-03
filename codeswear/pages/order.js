import React from "react";

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CODESWEAR.COM
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Animated Night Hill Illustrations
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-blue-800  py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow text-blue-800 py-2 text-lg px-1">
                  Reviews
                </a>
                <a className="flex-grow text-blue-800 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">T-Shirt</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto text-gray-900">Rs. 499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Hoodie</span>
                <span className="ml-auto text-gray-900">4</span>
                <span className="ml-auto text-gray-900">Rs. 799</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">T-Shirt</span>
                <span className="ml-auto text-gray-900">3</span>
                <span className="ml-auto text-gray-900">Rs. 399</span>
              </div>
              <div className="flex-col">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Sub-Total: Rs. 58.00
                </span>
                <div className="justify-end">
                  <button className="flex my-2  text-white bg-blue-950 hover:bg-pink-600 border-0 py-2 px-3 focus:outline-none  rounded text-base">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
          /
        </div>
      </section>
    </div>
  );
};

export default Order;
