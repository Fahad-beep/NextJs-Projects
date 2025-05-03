import Image from "next/image";
import React from "react";

interface emptyInterface {
  label: String;
}
const Empty = ({ label }: emptyInterface) => {
  return (
    <div className="h-full flex  flex-col items-center mt-16 ">
      <Image alt="empty" src="/empty.png" width={100} height={100} />
      <p className="font-semibold text-2xl text-muted-foreground">{label}</p>
    </div>
  );
};

export default Empty;
