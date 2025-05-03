import Image from "next/image";
import React from "react";

const isLoading = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col  gap-y-2 mt-16">
      <Image
        alt="loading"
        src="/logo.png"
        width={100}
        height={100}
        className="animate-bounce"
      />
      <p className="text-sm text-muted-foreground">Genius Is Thinking....</p>
    </div>
  );
};

export default isLoading;
