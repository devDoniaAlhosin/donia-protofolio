"use client";

import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import React from "react";

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

export const MagicButton = ({
  title,
  icon = <FaLocationArrow />,
  position = "right",
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        otherClasses
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {position === "left" && icon}
        <span className="mx-2">{title}</span>
        {position === "right" && icon}
      </span>
    </motion.button>
  );
};
