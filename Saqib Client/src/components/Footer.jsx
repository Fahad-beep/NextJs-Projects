import ImageBox from "@/components/ImageBox";
import FooterSocial from "@/components/FooterSocial";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-black text-white">
      <div className="border-b border-solid border-[#5A5A5A]/40 w-full py-16">
        <p className="text-white lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-semibold text-center">
          info@example.com
        </p>
      </div>
      <div className="container">
        <div className="flex md:gap-10 gap-16 py-16 md:flex-row flex-col">
          <div className="flex flex-1 flex-col gap-12 md:items-start items-center">
            <ImageBox
              src="/logo.svg"
              width={130}
              height={40}
              alt="Company Logo"
            />
            <div className="md:flex hidden">
              <FooterSocial />
            </div>
          </div>
          <div className="flex flex-1 md:gap-3 gap-12 md:flex-row flex-col">
            <div className="flex flex-col gap-8 flex-1 md:items-start items-center">
              <h3 className="text-white text-base font-clashMedium">
                NAVIGATION
              </h3>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Services
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-8 flex-1 md:items-start items-center">
              <h3 className="text-white text-base font-clashMedium">
                SERVICES
              </h3>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Shopify Theme Development
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Shopify Custom Development
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Shopify App Development
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Platform Migration
              </Link>
              <Link
                href="/"
                className="text-white text-base font-clashLight hover:underline anim"
              >
                Figma to Shopify Development
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center">
            <FooterSocial />
          </div>
        </div>
      </div>
    </footer>
  );
}
