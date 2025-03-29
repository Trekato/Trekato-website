"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SenderMessageProps {
  message: string;
  className?: string;
}

export function SenderMessage({ message, className }: SenderMessageProps) {
  return (
    <motion.div
      className="flex justify-end w-full font-geist font-medium text-[18px] sm:text-[24px] md:text-[32px]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={cn(
          "bg-[#0072F5] text-primary-foreground p-2 sm:p-3 px-4 sm:px-6 rounded-full rounded-br-none max-w-[90%] sm:max-w-[85%] md:max-w-[80%]",
          className,
        )}
      >
        {message}
      </div>
    </motion.div>
  );
}
