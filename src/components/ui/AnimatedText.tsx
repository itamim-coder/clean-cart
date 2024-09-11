"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  // Splitting text by line breaks first
  const lines = text.split("\n"); // Split the text into lines

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`text-2xl text-center ${className}`} // Merge custom className with defaults
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ overflow: "hidden" }}
    >
      {lines.map((line, index) => (
        <motion.div key={index} className="block"> {/* Wrap each line in its own div */}
          {line.split(" ").map((word, i) => ( // Split the line into words
            <motion.span key={i} variants={child} className="mr-2"> {/* Add margin between words */}
              {word === " " ? "\u00A0" : word}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
