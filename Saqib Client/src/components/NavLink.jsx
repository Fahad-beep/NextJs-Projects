"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ label, href, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      className={`nav-link ${isActive ? "nav-link-active" : ""} ${className}`}
      href={href}
    >
      {label}
    </Link>
  );
}
