import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center flex-col md:flex-row md:justify-start py-2">
      <div className="logo mx-5">
        <Image src="/displayLogo.png" width={200} height={40} />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl">
          <Link href="/">
            <li>T-Shirts</li>
          </Link>
          <Link href="/">
            <li>Hoodies</li>
          </Link>
          <Link href="/">
            <li>Mugs</li>
          </Link>
          <Link href="/">
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <CiShoppingCart className="text-xl absolute right-2 top-4 md:text-4xl" />
    </div>
  );
};

export default NavBar;
