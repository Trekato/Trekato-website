import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Plans",
    description:
      "An infinite scroll whiteboard for each day with to-dos, docs, locations, mention friends & audio rooms. Everything syncs seamlessly, real-time. ",
    content: <img src="/explanation_phone/1.svg" alt="phone_layout" />,
    icon: <img src="/animated_dock/plans.svg" alt="plans" />,
  },
  {
    title: "Global Chat",
    description:
      "Talk to the world. Ask locals for tips, find travel buddies, maybe even find your next date. Drop a message. Locals and explorers reply. Real-time, worldwide.",
    content: <img src="/explanation_phone/2.svg" alt="phone_layout" />,
    icon: <img src="/animated_dock/global_chat.svg" alt="global_chat" />,
  },
  {
    title: "Trip Templates",
    description:
      "Sell your perfect itinerary. Been there, done that? Turn your travel plans into a digital product. Best spots, best eats, best hacks - package it, design it, sell it, get paid.",
    content: (
      <div className="border-[4px] rounded-3xl border-black h-96 overflow-auto hide-scrollbar">
        <img
          src="/explanation_phone/3_ext.svg"
          alt="Plans"
          className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain hide-scrollbar"
        />
      </div>
    ),
    icon: <img src="/animated_dock/trip_templates.svg" alt="trip_templates" />,
  },
  {
    title: "Trip Template Creation Toolbar",
    description: "A toolbox for creating your own-style trip templates.",
    content: <img src="/explanation_phone/4.svg" alt="toolbar_layout" />,
  },
  {
    title: "Trekato Escapes",
    description:
      "You know a place, a taste, an adventure that tourists will never find alone. That’s your superpower. Host your own experience. Set your price. Accept who joins. Get Paid.",
    content: (
      <div className="border-[4px] rounded-3xl border-black h-96 overflow-auto hide-scrollbar">
        <img
          src="/explanation_phone/5_ext.svg"
          alt="Plans"
          className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain hide-scrollbar"
        />
      </div>
    ),
    icon: <img src="/animated_dock/escapes.svg" alt="escapes" />,
  },
  {
    title: "Trekato Socials",
    description: "Profile Likes. Places Visited. Feeds. Followers. DMs. Everything you love. 100% personalized. No algorithm deciding what you see.",
    content: <img src="/explanation_phone/6.svg" alt="phone_layout" />,
    icon: <img src="/animated_dock/heart.svg" alt="heart" />,
  },
];
const DesktopExplanation = () => {
  return (
    <div className="w-full py-4 flex flex-row justify-center items-center gap-5 flex-wrap">
      <div className="flex-1 text-primary font-geist font-semibold text-[32px] text-center max-w-[340px]">
        <span className="text-[#A3A3A3]">Ecosystem.</span> Where Travelers Become Creators.
      </div>
      <StickyScroll content={content} contentClassName="flex-1" />
    </div>
  );
};

export default DesktopExplanation;
