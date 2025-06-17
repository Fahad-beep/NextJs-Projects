"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
function PreLoader() {
  const preLoaderRef = useRef(null);
  useEffect(() => {
    gsap.set(preLoaderRef.current, { visibility: "visible" });
    const tl = gsap.timeline({ repeat: 5 });
    tl.set(".barOne", { opacity: 0 })
      .set(".barTwo", { opacity: 0 })
      .set(".barThree", { opacity: 0 })
      .to(".barOne", { opacity: 1, ease: "power4.out", duration: 0.5 })
      .to(".barTwo", { opacity: 1 })
      .to(".barThree", { opacity: 1 });
  }, []);
  return (
    <>
      <div className="preloader">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 559.12 552.23"
          ref={preLoaderRef}
          style={{ visibility: "hidden" }}
        >
          <defs></defs>
          <path
            className="barTwo "
            // fill="#a4de02"
            fill="#ffffff"
            d="M993.72,1060.28h-66.2l131.24-228.11h-85.9L798.78,1134.74H973.61l-92,141.37h88.82L1047,1158.48a63.55,63.55,0,0,0-53.27-98.2Z"
            transform="translate(-720.44 -723.89)"
          />
          <polygon
            className="barThree"
            // fill="#a4de02"
            fill="#ffffff"
            points="559.12 0 475.32 0 353.54 232.62 353.6 232.62 322.32 292.36 406.11 292.36 527.89 59.74 527.84 59.74 559.12 0"
          />
          <polygon
            className="barOne"
            // fill="#a4de02"
            fill="#ffffff"
            points="50.15 203.5 0 291.14 85.78 291.14 135.93 203.5 50.15 203.5"
          />
        </svg>
      </div>
    </>
  );
}
export default PreLoader;
