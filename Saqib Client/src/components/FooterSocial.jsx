"use client";

import Link from "next/link";
import { InstagramIcon, LinkedInIcon, DiscordIcon } from "@/icons";

export default function FooterSocial() {
  return (
    <div className="flex flex-col gap-12 md:items-start items-center">
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
      <p className="text-white font-clashExtralight">
        © {new Date().getFullYear()} ShopifyGeeks. All Rights Reserved.
      </p>
    </div>
  );
}
