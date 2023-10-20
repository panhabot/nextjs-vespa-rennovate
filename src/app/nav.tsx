"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scaleY: 0 },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <div className="hidden md:flex w-full h-[45px] justify-center mt-4 items-center bg-white rounded-xl  z-10">
        <div className="px-2 cursor-pointer">Models</div>
        <div className="px-2 cursor-pointer">Vespa World</div>
        <div className="px-2 cursor-pointer">Customer Services</div>
        <div className="px-2 cursor-pointer">Contact</div>
      </div>
      <div
        onClick={handleMenuClick}
        className="md:hidden justify-center flex w-full h-[45px] mt-4 border rounded-xl mb-4"
      >
        <Image src="/menu.svg" width={24} height={24} alt="menu" />
      </div>
      {isOpen && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container transition ease-in delay-75 duration-500 fixed z-10 h-screen -mx-4 top-0 bg-black w-full flex flex-col px-4 "
        >
          <motion.div
            className="text-[120px] text-white self-end"
            onClick={handleMenuClick}
          >
            X
          </motion.div>
          <motion.div
            variants={item}
            className="item px-2 text-white cursor-pointer mt-4 text-[30px] font-bold border-t border-b "
          >
            Models
          </motion.div>
          <motion.div
            variants={item}
            className="item px-2 text-white cursor-pointer mt-4 text-[30px] border-b font-bold self-end"
          >
            Vespa World
          </motion.div>
          <motion.div
            variants={item}
            className="item px-2 text-white cursor-pointer text-[30px] border-b mt-4 font-bold "
          >
            Customer Services
          </motion.div>
          <motion.div
            variants={item}
            className="item px-2 text-white cursor-pointer text-[30px] border-b mt-4 font-bold self-end"
          >
            Contact
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
