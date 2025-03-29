"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const stagger = (value: number) => {
    return value;
  };

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span initial={{}} key={`char-${index}`} className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}>
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  typingSpeed = 40,
  delayBetweenLines = 700,
  cursorClassName,
  onComplete,
}: {
  words: {
    text: string[];
    className?: string;
  }[];
  className?: string;
  typingSpeed?: number;
  delayBetweenLines?: number;
  cursorClassName?: string;
  onComplete?: () => void;
}) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  const allLines = words.flatMap((word) => word.text);

  useEffect(() => {
    if (currentLineIndex >= allLines.length) {
      setTypingComplete(true);
      setIsTyping(false);
      onComplete?.();
      return;
    }

    if (!isTyping) return;

    const currentLine = allLines[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => {
          const newText = [...prev];
          if (currentLineIndex >= newText.length) {
            newText.push(currentLine.substring(0, currentCharIndex + 1));
          } else {
            newText[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          }
          return newText;
        });
        setCurrentCharIndex(currentCharIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setCurrentCharIndex(0);
      }, delayBetweenLines);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, currentCharIndex, allLines, isTyping, typingSpeed, delayBetweenLines, onComplete]);

  return (
    <div className={cn("flex flex-col my-4 sm:my-5 md:my-6", className)}>
      {displayedText.map((line, index) => (
        <div key={`typed-line-${index}`} className="flex mb-1 sm:mb-2">
          <div className="font-geist text-inherit font-medium">
            {line}
            {index === currentLineIndex && !typingComplete && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className={cn("inline-block ml-0.5 sm:ml-1 w-[2px] sm:w-[3px] h-[18px] sm:h-[22px] md:h-[28px] bg-black", cursorClassName)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
