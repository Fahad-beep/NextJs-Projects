import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row md:justify-start mb-[5px] py-2 shadow-xl">
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
      <CiShoppingCart className="text-xl absolute right-2 top-4 md:text-2xl" />
    </div>
  );
};

export default NavBar;
