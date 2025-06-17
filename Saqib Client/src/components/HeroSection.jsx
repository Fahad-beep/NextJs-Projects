"use client";

import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <div className="absolute inset-0 z-0 ">
      <Spline scene="/scene.splinecode" className="" />
    </div>
  );
}
