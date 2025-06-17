"use client";
import React, { useEffect, useRef } from "react";
import SplitType, { TargetElement } from "split-type";
import { GoArrowUpRight, GoRead } from "react-icons/go";
import gsap from "gsap";

const HomePage = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  useEffect(() => {
    if (ref1.current && ref2.current && ref3.current) {
      console.log("innit");
      const t1 = new SplitType(ref1.current as TargetElement);
      const t2 = new SplitType(ref2.current as TargetElement);
      const t3 = new SplitType(ref3.current as TargetElement);
      gsap.set(t1.chars, { yPercent: 100 });
      gsap.set(t2.chars, { yPercent: 100 });
      gsap.set(t3.chars, { yPercent: 100 });
      gsap.to(t1.chars, {
        yPercent: 0,
        duration: 0.4,
        ease: "expo.out",
        stagger: 0.05,
        delay: 0.2,
      });
      gsap.to(t2.chars, {
        yPercent: 0,
        duration: 0.4,
        ease: "expo.out",
        stagger: 0.05,
        delay: 0.2,
      });
      gsap.to(t3.chars, {
        yPercent: 0,
        duration: 0.4,
        ease: "expo.out",
        stagger: 0.05,
        delay: 0.2,
      });
    }
  }, []);
  return (
    <div className="flex w-full h-full items-center justify-center relative bg-gradient-to-l from-[#02050A] to-[#070B1A] -z-10">
      <div className="absolute inset-0 flex justify-end items-end -z-10">
        <img
          src="/img/p1.png"
          alt="interview-1"
          className="w-[50%] h-[80%] object-cover transition-transform translate-y-[32%]"
        />
      </div>
      <div className="absolute inset-0 flex justify-start items-center mb-20 -z-10">
        <img
          src="/img/p1.png"
          alt="interview-1"
          className="w-56 h-64 object-cover transition-transform -translate-x-[20%]"
        />
      </div>
      <div className="absolute inset-0 flex justify-start items-center mb-20 -z-10">
        <img
          src="/img/p1.png"
          alt="interview-1"
          className="w-56 h-64 object-cover transition-transform -translate-x-[0%] translate-y-[185%]"
        />
      </div>
      <div className="absolute inset-0 flex justify-start items-center mb-20 -z-10">
        <img
          src="/img/p1.png"
          alt="interview-1"
          className="w-60 h-60 object-cover transition-transform translate-x-[80%] translate-y-[90%]"
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-end mb-20 z-10">
        <div className="relative w-48 h-48 transition-transform -translate-x-[145%] translate-y-[65%]">
          {/* Image */}
          <img
            src="/img/p1.png"
            alt="interview-1"
            className="w-full h-full object-cover rounded-full contrast-200 saturate-200"
          />
          <div className="absolute inset-0  w-[95%] h-[95%] top-[2.5%] left-[2.5%] duration-300 hover:w-[100%] hover:h-[100%] hover:top-0 hover:left-0 contrast-[10000%] saturate-[10000%] rounded-full bg-[#001ca8] opacity-50 transition-all group">
            <div className="w-full h-full flex items-center justify-center">
              <span className="group-hover:scale-110 transition-all duration-300 z-10">
                <GoArrowUpRight
                  className="size-[70]"
                  strokeWidth={0.1}
                  size={70}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="container-start-text"
        className="flex flex-col h-72 w-[50%] items-start justify-center gap-4 mt-24 pl-2 pb-2 z-50"
      >
        <span
          className="text-5xl font-bold "
          ref={ref1}
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          Transforming
        </span>
        <span
          className="text-9xl font-bold bg-gradient-to-l from-[#3F5AF3] to-[#3F5AF300]"
          ref={ref2}
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          Visions into
        </span>
        <span
          className="text-7xl font-bold"
          ref={ref3}
          style={{
            clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          Digital Reality
        </span>
      </div>
    </div>
  );
};

export default HomePage;
