"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ChatLoadingProps {
  className?: string;
  message?: string;
}

export function ChatLoading({
  className,
  message = "Thinking...",
}: ChatLoadingProps) {
  return (
    <motion.div
      className="flex justify-start w-full"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "bg-[#F5F5F5] p-2 sm:p-3 px-4 sm:px-6 rounded-full rounded-bl-none max-w-[95%] font-geist font-medium text-[18px] sm:text-[22px] md:text-[28px]",
            className,
          )}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            {message}
            <div className="flex space-x-1 ml-1 sm:ml-2">
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0,
                }}
              />
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.4,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
