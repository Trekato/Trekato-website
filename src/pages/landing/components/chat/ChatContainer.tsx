"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ChatContainerProps {
  className?: string;
  children: ReactNode;
}

export function ChatContainer({ className, children }: ChatContainerProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col gap-3 sm:gap-4 w-full mx-auto p-3 sm:p-4 rounded-2xl sm:rounded-full",
        className,
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
