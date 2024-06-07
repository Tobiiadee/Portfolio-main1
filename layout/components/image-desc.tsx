/** @format */

import React from "react";
import Image from "next/image";
import img1 from "../../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import img2 from "../../assets/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";

const ImageDesc = () => {
  return (
    <div className="relative max-w-[22rem] lg:max-w-[20rem] shadow-md rounded-md flex overflow-hidden">
      <Image src={img1} alt="display image one" width={320} height={330}/>
      <Image src={img2} alt="display image one" width={320} height={330}/>
      <div className="absolute top-3 right-4 flex items-center gap-1 z-30">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default ImageDesc;
