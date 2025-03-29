const DATA = [
  {
    icon: "/animated_dock/plans.svg",
    title: "Plans",
    description:
      "An infinite scroll whiteboard for each day with to-dos, docs, locations, mention friends & audio rooms. Everything syncs seamlessly, real-time.",
    image: (
      <img src="/explanation_phone/1.svg" alt="Plans" className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain" />
    ),
  },
  {
    icon: "/animated_dock/global_chat.svg",
    title: "Global Chat",
    description:
      "Talk to the world. Ask locals for tips, find travel buddies, maybe even find your next date. Drop a message. Locals and explorers reply. Real-time, worldwide.",
    image: (
      <img src="/explanation_phone/2.svg" alt="Plans" className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain" />
    ),
  },
  {
    icon: "/animated_dock/trip_templates.svg",
    title: "Trip Templates",
    description:
      "Sell your perfect itinerary. Been there, done that? Turn your travel plans into a digital product. Best spots, best eats, best hacks - package it, design it, sell it, get paid.",
    image: (
      <div className="border-[4px] rounded-3xl border-black h-96 overflow-auto hide-scrollbar">
        <img
          src="/explanation_phone/3_ext.svg"
          alt="Plans"
          className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain hide-scrollbar"
        />
      </div>
    ),
  },
  {
    icon: "",
    title: "Trip Template Creation Toolbar",
    description: "A toolbox for creating your own-style trip templates.",
    image: (
      <img src="/explanation_phone/4.svg" alt="Plans" className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain" />
    ),
  },
  {
    icon: "/animated_dock/escapes.svg",
    title: "Trekato Escapes",
    description:
      "You know a place, a taste, an adventure that tourists will never find alone. That’s your superpower. Host your own experience. Set your price. Accept who joins. Get Paid.",
    image: (
      <div className="border-[4px] rounded-3xl border-black h-96 overflow-auto hide-scrollbar">
        <img
          src="/explanation_phone/5_ext.svg"
          alt="Plans"
          className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain hide-scrollbar"
        />
      </div>
    ),
  },
  {
    icon: "/animated_dock/heart.svg",
    title: "Trekato Socials",
    description: "Profile Likes. Places Visited. Feeds. Followers. DMs. Everything you love. 100% personalized. No algorithm deciding what you see.",
    image: (
      <img src="/explanation_phone/6.png" alt="Plans" className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-xs object-contain" />
    ),
  },
];

const MobileExplanation = () => {
  return (
    <div className="flex flex-col justify-center items-center px-3 sm:px-4 md:px-6">
      <h1 className="font-geist font-semibold text-lg sm:text-xl md:text-2xl text-primary text-center">
        <span className="text-[#A3A3A3]">Ecosystem.</span> Where Travelers Become Creators
      </h1>
      <div className="mt-4 sm:mt-6 md:mt-8 w-full max-w-6xl bg-[#FAFAFA] rounded-[10px] sm:rounded-[12px] p-3 sm:p-4 md:p-6">
        <div className="flex flex-col space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24">
          {DATA.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between px-1 sm:px-2 md:px-4">
              <div className={`flex flex-col space-y-2 sm:space-y-3 md:space-y-4 md:w-1/2 ${index % 2 === 1 ? "md:order-2 md:pl-4" : "md:pr-4"}`}>
                {item.icon && <img src={item.icon} alt={item.title} className="size-8 sm:size-10 md:size-12 bg-[#0072F5] rounded-full p-1" />}
                <h2 className="font-geist text-base sm:text-lg md:text-xl text-primary">
                  <span className="text-[#0072F5] font-semibold">{item.title}</span>. {item.description}
                </h2>
              </div>
              <div className={`mt-4 sm:mt-5 md:mt-0 md:w-1/2 flex justify-center ${index % 2 === 1 ? "md:order-1 md:pr-4" : "md:pl-4"}`}>
                {item.image}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileExplanation;
