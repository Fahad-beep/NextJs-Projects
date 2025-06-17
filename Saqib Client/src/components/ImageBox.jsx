"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageBox({ src, width, height, alt, href = "/" }) {
  return (
    <Link href={href}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}
