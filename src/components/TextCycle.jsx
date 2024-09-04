import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = ["Development", "Marketing", "Social Media", "Innovative"];
const variants = {
  enter: direction => {
    return {
      y: 50,
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
      y: -50
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
    }, 3 * 1000);
  }, [index, setIndex]);

  return (
    <div    className=" absolute w-[80%] overflow-hidden">
   <span className="text-black font-semibold mr-4 "> Includes{" "}</span>
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
            opacity: { duration: 0.5 }
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
