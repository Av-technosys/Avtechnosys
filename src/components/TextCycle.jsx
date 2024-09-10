import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = ["Development", "Marketing", "Social Media", "Innovative"];
const variants = {
  enter: direction => {
    return {
      y: 70,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      y: -70
    };
  }
};

const TextLoop = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 2000);
  }, [index, setIndex]);

  return (
    <div    className=" absolute w-[80%] overflow-hidden lg:pt-10 h-40">
   <span className="text-black font-medium lg:text-[4rem] mr-4  "> Includes{" "}</span>
      <AnimatePresence>
        <motion.span
          style={{ position: "absolute" }}
          variants={variants}
          key={index}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            // y: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.7 }
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};


export default function Input(){
    return (
      
        <TextLoop />

    );
  };
