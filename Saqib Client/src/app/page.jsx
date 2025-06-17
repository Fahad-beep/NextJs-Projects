import VideoPlayer from "@/components/VideoPlayer";
import ClientLogos from "@/components/ClientLogos";
import ServicesExpendableDetail from "@/components/ServicesExpendableDetail";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import { ArrowUpIcon } from "@/icons";
import PreloaderWrapper from "./PreLoaderWrapper";

export const metadata = {
  title: `Shopify Greeks - Software Service provider`,
  description:
    "At Shopify Geeks, our team specializes in a wide range of services designed to elevate your online store. Whether you need a stunning new theme, custom functionality, or a seamless migration to Shopify, we’ve got you covered. Explore our core services below and discover how we can help your business grow.",

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Shopify Greeks - Software Service provider`,
    url: "",
  },
  alternates: {
    canonical: ``,
  },
};

export default async function Home() {
  return (
    <PreloaderWrapper>
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="flex items-end justify-center bg-black sm:min-h-[calc(100vh-2px)] min-h-[calc(100vh-60px)] relative">
          <div className="container z-10 h-full">
            <div className="flex flex-col sm:py-20 py-32 relative md:gap-0 gap-3">
              <h1 className="md:text-9xl sm:text-8xl text-6xl font-bold text-white md:leading-[150px] sm:leading-[95px] leading-[75px]">
                Code. Design. Impact.
              </h1>
              <h4 className="text-white text-xl font-clashRegular md:text-center text-end z-10 md:absolute bottom-[110px] right-0">
                We create striking, high-performance
                <br className="sm:block hidden" />
                websites that turn ideas into reality.
              </h4>
            </div>
          </div>
          {/* <HeroSection /> */}

          <HeroSection />
        </div>

        {/* Video Section */}
        <VideoPlayer src="/video.ts" />
        <div className="flex items-center justify-center w-full border-t border-b border-solid border-white">
          <div className="container">
            <div className="flex items-center justify-center gap-2 py-3">
              <h5 className="text-white text-lg font-clashLight">
                Let’s Create
              </h5>
              <div className="flex items-center justify-center h-4 w-4">
                <ArrowUpIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Clients Logos Section */}
        <div className="flex w-full bg-black py-20">
          <div className="container">
            <div className="flex flex-col w-full">
              <h3 className="text-white text-base font-clashLight mb-12 text-center">
                {`CLIENT WE’VE WORKED WITH`}
              </h3>
              <ClientLogos />
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="flex w-full flex-col bg-white ">
          <div className="container">
            <div className="flex items-center gap-10 py-20 md:flex-row flex-col">
              <h1 className="flex flex-1 text-6xl text-[#07090B] font-bold">
                Our Services
              </h1>
              <p className="flex flex-1 text-base text-[#07090B] font-clashRegular">
                At Shopify Geeks, our team specializes in a wide range of
                services designed to elevate your online store. Whether you need
                a stunning new theme, custom functionality, or a seamless
                migration to Shopify, we’ve got you covered. Explore our core
                services below and discover how we can help your business grow.
              </p>
            </div>
          </div>
          <ServicesExpendableDetail />
        </div>

        {/* Contact Us Section */}
        <ContactUs />
      </div>
    </PreloaderWrapper>
  );
}
