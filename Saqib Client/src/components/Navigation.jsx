"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import ImageBox from "@/components/ImageBox";
import {
  CrossIcon,
  MenuIcon,
  LinkedInIcon,
  InstagramIcon,
  DiscordIcon,
} from "@/icons";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="container md:block hidden">
        <div className="flex items-center justify-between gap-4">
          <ImageBox
            src="/logo.svg"
            width={120}
            height={30}
            alt="Company Logo"
          />
          <div className="flex items-center justify-center">
            <div className="header-bluer gap-3 p-3 border border-solid border-white/20 rounded-md">
              <NavLink
                label="Home"
                href="/"
                className="bg-transparent border-none"
              />
              <NavLink label="About Us" href="/" className="" />
              <NavLink label="Services" href="/" className="" />
            </div>
          </div>
          <button className="bg-white text-black py-3 px-8 rounded-lg font-clashMedium text-base">
            Contact Us
          </button>
        </div>
      </nav>

      <nav className="container md:hidden block">
        <div className="flex items-center justify-between header-bluer gap-3 p-2 rounded-md border border-solid border-white/20">
          <ImageBox src="/logo.svg" width={80} height={25} alt="Company Logo" />
          <button
            className="flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center text-white space-y-6`}
      >
        <div className="flex items-center justify-between absolute top-0 right-0 left-0 px-3 py-6">
          <ImageBox src="/logo.svg" width={90} height={25} alt="Company Logo" />
          <button className="" onClick={() => setIsOpen(false)}>
            <CrossIcon />
          </button>
        </div>
        {/* Menu Items */}
        <ul className="flex flex-col space-y-6 text-center">
          <NavLink
            label="Home"
            href="/"
            className="bg-transparent border-none"
          />
          <NavLink label="About Us" href="/" className="" />
          <NavLink label="Services" href="/" className="" />
          <button className="bg-white text-black py-3 px-8 rounded-lg font-clashMedium text-base">
            Contact Us
          </button>
        </ul>

        {/* Email */}
        <p className="text-3xl font-semibold mt-6">info@example.com</p>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center rounded-full border border-solid border-[#5A5A5A]  h-12 w-12 p-2"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center rounded-full border border-solid border-[#5A5A5A]  h-12 w-12 p-2"
          >
            <InstagramIcon />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center rounded-full border border-solid border-[#5A5A5A]  h-12 w-12 p-2"
          >
            <DiscordIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
