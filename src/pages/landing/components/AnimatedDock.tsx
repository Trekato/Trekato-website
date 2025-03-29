"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Dock, DockIcon } from "@/components/ui/dock";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DATA = {
  feed: [
    { icon: "/animated_dock/escapes.svg", label: "escapes" },
    { icon: "/animated_dock/global_chat.svg", label: "global_chat" },
  ],
  features: [
    { icon: "/animated_dock/trip_templates.svg", label: "trip_templates" },
    { icon: "/animated_dock/trekato_ai.svg", label: "trekato_ai" },
  ],
  activity: [
    { icon: "/animated_dock/social_sharing.svg", label: "social_sharing" },
    { icon: "/animated_dock/plans.svg", label: "plans" },
    { icon: "/animated_dock/earnings.svg", label: "earnings" },
  ],
};

interface BadgePosition {
  name: string;
  text: string;
  color: string;
  top: number;
  right: number;
  rotate: number;
}

const getBadgePositions = (screenWidth: number): BadgePosition[] => {
  // Default positions (desktop)
  if (screenWidth >= 1024) {
    return [
      {
        name: "escapes",
        text: "Escapes",
        color: "#0072F5",
        top: -40,
        right: 450,
        rotate: -4,
      },
      {
        name: "trip_templates",
        text: "Trip Templates",
        color: "#8E4EC6",
        top: -55,
        right: 250,
        rotate: -1,
      },
      {
        name: "collaborators",
        text: "Collaborators",
        color: "#45A557",
        top: -55,
        right: 100,
        rotate: 1,
      },
      {
        name: "plans",
        text: "Plans",
        color: "#FF990A",
        top: -40,
        right: -50,
        rotate: 4,
      },
      {
        name: "global_chat",
        text: "Global Chat",
        color: "#12A594",
        top: 140,
        right: 420,
        rotate: 4,
      },
      {
        name: "trekato_ai",
        text: "Trekato AI",
        color: "#EA3E83",
        top: 150,
        right: 270,
        rotate: 1,
      },
      {
        name: "social_sharing",
        text: "Social Sharing",
        color: "#E5454D",
        top: 150,
        right: 70,
        rotate: -1,
      },
      {
        name: "earnings",
        text: "Earnings",
        color: "#F90BC6",
        top: 140,
        right: -50,
        rotate: -4,
      },
    ];
  }
  // Tablet positions
  else if (screenWidth >= 768) {
    return [
      {
        name: "escapes",
        text: "Escapes",
        color: "#0072F5",
        top: -40,
        right: 300,
        rotate: -4,
      },
      {
        name: "trip_templates",
        text: "Trip Templates",
        color: "#8E4EC6",
        top: -55,
        right: 170,
        rotate: -1,
      },
      {
        name: "collaborators",
        text: "Collaborators",
        color: "#45A557",
        top: -55,
        right: 50,
        rotate: 1,
      },
      {
        name: "plans",
        text: "Plans",
        color: "#FF990A",
        top: -40,
        right: -30,
        rotate: 4,
      },
      {
        name: "global_chat",
        text: "Global Chat",
        color: "#12A594",
        top: 140,
        right: 280,
        rotate: 4,
      },
      {
        name: "trekato_ai",
        text: "Trekato AI",
        color: "#EA3E83",
        top: 150,
        right: 180,
        rotate: 1,
      },
      {
        name: "social_sharing",
        text: "Social Sharing",
        color: "#E5454D",
        top: 150,
        right: 50,
        rotate: -1,
      },
      {
        name: "earnings",
        text: "Earnings",
        color: "#F90BC6",
        top: 140,
        right: -30,
        rotate: -4,
      },
    ];
  }
  // Mobile positions (more compact layout)
  else {
    return [
      {
        name: "escapes",
        text: "Escapes",
        color: "#0072F5",
        top: -20,
        right: 330,
        rotate: -4,
      },
      {
        name: "trip_templates",
        text: "Trip Templates",
        color: "#8E4EC6",
        top: -25,
        right: 220,
        rotate: -1,
      },
      {
        name: "collaborators",
        text: "Collaborators",
        color: "#45A557",
        top: -25,
        right: 120,
        rotate: 1,
      },
      {
        name: "plans",
        text: "Plans",
        color: "#FF990A",
        top: -20,
        right: 60,
        rotate: 4,
      },
      {
        name: "global_chat",
        text: "Global Chat",
        color: "#12A594",
        top: 110,
        right: 320,
        rotate: 4,
      },
      {
        name: "trekato_ai",
        text: "Trekato AI",
        color: "#EA3E83",
        top: 120,
        right: 240,
        rotate: 1,
      },
      {
        name: "social_sharing",
        text: "Social Sharing",
        color: "#E5454D",
        top: 120,
        right: 130,
        rotate: -1,
      },
      {
        name: "earnings",
        text: "Earnings",
        color: "#F90BC6",
        top: 110,
        right: 60,
        rotate: -4,
      },
    ];
  }
};

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
  },
];

const AnimatedDock = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [badges, setBadges] = useState<BadgePosition[]>([]);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    setBadges(getBadgePositions(windowWidth));
  }, [windowWidth]);

  const handleIconHover = (label: string) => {
    setHoveredItem(label);
  };

  const handleAvatarHover = () => {
    setHoveredItem("collaborators");
  };

  const handleHoverEnd = () => {
    setHoveredItem(null);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-12 my-20 md:my-30 lg:my-40 px-4">
      <h1 className="text-primary font-geist font-semibold text-2xl md:text-3xl lg:text-[44px] text-center mb-10 md:mb-16 lg:mb-[80px]">
        <span className="text-[#A3A3A3]">Home.</span> For Travel Creators
      </h1>

      <div className="flex flex-col items-center justify-center relative">
        {badges.map((badge) => {
          const isActive = hoveredItem === badge.name;

          return (
            <motion.div
              key={badge.name}
              initial={{ opacity: 1 }}
              animate={{
                opacity: hoveredItem ? (isActive ? 1 : 0.4) : 1,
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute z-[100]"
              style={{
                top: `${badge.top}px`,
                right: `${badge.right}px`,
                transform: `rotate(${badge.rotate}deg)`,
              }}
            >
              <Badge
                className="font-geist text-white font-medium text-xs md:text-sm lg:text-[16px]"
                style={{
                  backgroundColor: badge.color,
                  rotate: `${badge.rotate}deg`,
                  filter: hoveredItem && !isActive ? "grayscale(80%)" : "none",
                }}
              >
                {badge.text}
              </Badge>
            </motion.div>
          );
        })}
        <Dock
          direction="middle"
          className="bg-black overflow-hidden max-w-full max-md:scale-75 max-lg:scale-90"
          iconSize={windowWidth < 640 ? 30 : windowWidth < 1024 ? 35 : 40}
          iconMagnification={windowWidth < 640 ? 45 : windowWidth < 1024 ? 50 : 60}
          iconDistance={windowWidth < 640 ? 100 : windowWidth < 1024 ? 120 : 140}
        >
          {DATA.feed.map((item) => (
            <DockIcon key={item.label} className="text-white" onMouseEnter={() => handleIconHover(item.label)} onMouseLeave={handleHoverEnd}>
              <img src={item.icon || "/placeholder.svg"} alt={item.label} className="size-20 brightness-[10] opacity-90" />
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-gray-600" />
          {DATA.features.map((item) => (
            <DockIcon key={item.label} className="text-white" onMouseEnter={() => handleIconHover(item.label)} onMouseLeave={handleHoverEnd}>
              <img src={item.icon || "/placeholder.svg"} alt={item.label} className="size-20 brightness-[10] opacity-90" />
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-gray-600" />
          <div onMouseEnter={handleAvatarHover} onMouseLeave={handleHoverEnd}>
            <AvatarCircles avatarUrls={avatars} />
          </div>
          <Separator orientation="vertical" className="h-full bg-gray-600" />
          {DATA.activity.map((item) => (
            <DockIcon key={item.label} className="text-white" onMouseEnter={() => handleIconHover(item.label)} onMouseLeave={handleHoverEnd}>
              <img src={item.icon || "/placeholder.svg"} alt={item.label} className="size-20 brightness-[10] opacity-90" />
            </DockIcon>
          ))}
        </Dock>
      </div>

      <h2 className="font-geist text-[#666666] text-lg md:text-xl lg:text-2xl text-center w-full max-w-[675px] font-medium mt-12 md:mt-16 lg:mt-24 px-4">
        Trekato provides you the tools to <span className="text-primary">plan, share, collaborate, monetize</span> for your next trip.
      </h2>

      <Button className="rounded-full py-4 md:py-5 lg:p-6 px-6 md:px-7 lg:px-8 mt-4 md:mt-6">Download App</Button>
    </div>
  );
};

export default AnimatedDock;
