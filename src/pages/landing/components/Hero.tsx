"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChatContainer } from "./chat/ChatContainer";
import { ChatLoading } from "./chat/ChatLoading";
import { ReceiverMessage } from "./chat/ReceiverMessage";
import { SenderMessage } from "./chat/SenderMessage";

const chatData = {
  userMessage: "How do I not look like a tourist?",
  botResponse: [
    "Step 1: Stop looking confused.",
    "Step 2: Don't wear that 'I ❤️ Goa' t-shirt.",
    "Step 3: Walk casually, not like you're searching for WiFi.",
  ],
};

const Hero = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [showThinking, setShowThinking] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowThinking(true);
      setTimeout(() => {
        setShowThinking(false);
        setShowResponse(true);
      }, 750);
    }, 750);
  }, []);

  return (
    <div className="flex flex-col items-center mt-[40px] sm:mt-[50px] md:mt-[75px] px-4 sm:px-6 md:px-8">
      <h1 className="font-geist text-[28px] sm:text-[36px] md:text-[44px] font-semibold mb-[30px] sm:mb-[40px] md:mb-[50px] text-center">
        <span className="text-[#A3A3A3]">Ask.</span> Trekato Intelligent.
      </h1>
      <ChatContainer className="bg-background w-full sm:w-10/12 md:w-9/12 lg:w-8/12 flex flex-col gap-6 sm:gap-8 md:gap-12">
        <SenderMessage message={chatData.userMessage} />
        {showThinking && <ChatLoading message="Thinking" />}
        {showResponse && <ReceiverMessage message={chatData.botResponse} useTypewriter={true} typingSpeed={20} delayBetweenLines={500} />}
      </ChatContainer>
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center items-center">
        <Button variant="outline" className="rounded-full p-4 sm:p-5 md:p-6 min-w-[120px] sm:min-w-[140px] md:min-w-[150px] w-full sm:w-auto">
          Ask Trekato AI
        </Button>
      </div>
    </div>
  );
};

export default Hero;
