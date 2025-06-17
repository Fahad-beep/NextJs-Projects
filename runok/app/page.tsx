"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./globals.css";
import HomePage from "./(dashboard)/(routes)/home/page";

const Home = () => {
  const scrollRef = useRef<any>(null);

  const onMouseHandler = (event: MouseEvent) => {
    carryMouseAnimation(event.clientX, event.clientY);
  };

  useEffect(() => {
    let locomotiveScroll: any;

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        lerp: 0.04,
        multiplier: 0.4,
        firefoxMultiplier: 50,
        touchMultiplier: 1.5,
        class: "is-revealed",
        scrollFromAnywhere: true,
        resetNativeScroll: true,
        reloadOnContextChange: true,
        getSpeed: true,
        getDirection: true,
      });

      // Update ScrollTrigger when locomotive scroll updates
      locomotiveScroll.on("scroll", () => {
        // Optional: Add any scroll-based animations here
      });
    };
    initLocomotiveScroll();
    window.addEventListener("mousemove", onMouseHandler);

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", onMouseHandler);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  const carryMouseAnimation = (clientX: number, clientY: number) => {
    gsap.to(".mouseCircle", {
      x: clientX - 7,
      y: clientY - 7,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <>
      <div className="mouseCircle fixed bg-[#3F5AF3] h-3 w-3 rounded-full pointer-events-none z-50" />
      <main
        data-scroll-container
        className="overflow-x-hidden min-h-screen w-screen"
      >
        <div
          data-scroll
          data-scroll-speed="0.00000005"
          className="flex h-screen w-screen"
        >
          <HomePage data-scoll data-scroll-speed="0.00000005" />
        </div>
      </main>
    </>
  );
};

export default Home;
