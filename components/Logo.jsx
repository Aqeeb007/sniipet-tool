import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src={"/logoNew.png"} alt="logo" width={60} height={60} />
      <span>Snippets</span>
    </div>
  );
};
