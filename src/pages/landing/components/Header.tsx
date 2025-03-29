import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-4 sm:px-6 md:px-[27px] py-3 md:py-[17px]">
      <div className="flex gap-2 sm:gap-[10px] items-center">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-8 h-8 sm:w-auto sm:h-auto"
        />
        <h2 className="font-geist font-semibold text-xl sm:text-2xl md:text-[32px]">
          Trekato
        </h2>
      </div>
      <Button className="text-xs sm:text-sm md:text-base py-1 px-2 sm:px-3 md:px-4">
        Download App
      </Button>
    </header>
  );
};

export default Header;
