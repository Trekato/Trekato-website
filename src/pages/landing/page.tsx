import { useEffect, useState } from "react";
import AnimatedDock from "./components/AnimatedDock";
import DesktopExplanation from "./components/DesktopExplanation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileExplanation from "./components/MobileExplanation";

const LandingPage = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <AnimatedDock />
      {screenSize.width > 1024 ? <DesktopExplanation /> : <MobileExplanation />}
      <Footer />
    </main>
  );
};

export default LandingPage;
