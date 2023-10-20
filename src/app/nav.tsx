import React from "react";

export default function Nav() {
  return (
    <div className=" w-full h-[45px] mt-4">
      <div className="flex justify-center h-full items-center bg-white rounded-xl">
        <div className="px-2 cursor-pointer">Models</div>
        <div className="px-2 cursor-pointer">Vespa World</div>
        <div className="px-2 cursor-pointer">Customer Services</div>
        <div className="px-2 cursor-pointer">Contact</div>
      </div>
    </div>
  );
}
