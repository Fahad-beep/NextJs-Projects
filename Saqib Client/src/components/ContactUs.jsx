"use client";
import Spline from "@splinetool/react-spline";

export default function ContactUs() {
  return (
    <div className="flex min-h-[768px] bg-black md:flex-row flex-col relative">
      <div className="md:flex hidden min-h-[768px] absolute inset-0">
        <div className="flex flex-1 bg-black"></div>
        <div className="flex flex-1"></div>
      </div>
      <div className="md:container p-0 max-w-full ">
        <div className="flex md:absolute static md:flex-row flex-col">
          <div className="flex flex-1 flex-col py-20 px-12 sm:px-0  gap-10 min-h-[600px] sm:h-auto">
            <div className="flex flex-col items-start gap-10 text-start">
              <h1 className="md:text-8xl sm:text-5xl text-5xl text-white font-semibold">
                Let’s Get
                <br /> In Touch
              </h1>

              <button className="text-[#4462FF] text-base font-clashRegular py-3 px-8 bg-white w-max border border-solid border-transparent hover:border-[#4462FF] anim">
                Book Free Consultation
              </button>
            </div>
            <div className="flex flex-1 items-center justify-end relative">
              <Spline scene="/contact.splinecode" />
            </div>
          </div>
          <div className="flex flex-[1.2] bg-[#2D4EFF] h-[768px] w-full">
            <form className="flex flex-col w-full md:py-20 sm:py-12 p-8 gap-6">
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="text-white placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                />
              </div>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-white placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                />
              </div>
              <div className="flex w-full">
                <textarea
                  type="email"
                  placeholder="Your Message"
                  className="text-white min-h-48 max-h-48 placeholder-white w-full bg-transparent border-b border-solid border-[#B7B9B3] py-3 text-xl font-clashRegular"
                />
              </div>
              <button className="text-[#4462FF] text-base font-clashRegular py-3 px-8 bg-white w-max border border-solid border-transparent hover:border-[#4462FF] anim">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
