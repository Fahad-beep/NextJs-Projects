"use client";

import { useEffect, useState } from "react";
import PreLoader from "@/components/Preloader";

export default function PreLoaderWrapper({ children }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {children}
      {showLoader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <PreLoader />
        </div>
      )}
    </div>
  );
}
