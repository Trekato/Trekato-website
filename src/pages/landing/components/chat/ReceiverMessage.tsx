"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useEffect, useState } from "react";

export interface ReceiverMessageProps {
  message: string[];
  className?: string;
  useTypewriter?: boolean;
  typingSpeed?: number;
  delayBetweenLines?: number;
}

export function ReceiverMessage({ message, className, useTypewriter = false, typingSpeed = 40, delayBetweenLines = 700 }: ReceiverMessageProps) {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (useTypewriter && typingComplete) {
      setTypingComplete(false);
    }
  }, []);

  return (
    <motion.div className="flex justify-start w-full" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "bg-[#F5F5F5] p-2 sm:p-3 px-4 sm:px-6 rounded-xl rounded-bl-none sm:rounded-2xl sm:rounded-bl-none font-geist font-medium text-[18px] sm:text-[22px] md:text-[28px]",
            className
          )}
        >
          {useTypewriter ? (
            <TypewriterEffectSmooth
              words={[{ text: message }]}
              className="text-[18px] sm:text-[22px] md:text-[28px] font-medium"
              typingSpeed={typingSpeed}
              delayBetweenLines={delayBetweenLines}
              onComplete={() => setTypingComplete(true)}
            />
          ) : (
            message.map((line, index) => (
              <div key={`line-${index}`} className="mb-1 sm:mb-2">
                {line}
              </div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}
