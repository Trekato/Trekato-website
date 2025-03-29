import { Button } from "@/components/ui/button";

const Footer = () => {
  
  return (
    <footer className="mx-3 rounded-[12px] bg-[#FAFAFA] p-8 space-y-[44px]">
      <div className="bg-white p-4 md:p-8 rounded-2xl">
        <div className="flex flex-row gap-[22px] max-md:gap-1 items-center">
          <img src="/dollar.svg" alt="dollar" className="size-10" />
          <h3 className="font-geist font-bold text-[28px] md:text-[42px] text-primary line-clamp-1">Monetize.</h3>
        </div>
        <p className="font-geist font-medium text-[18px] md:text-[24px] text-primary max-w-[1047px] mt-[11px] mb-[30px]">
        Host experiences. Sell itineraries. Share posts. <span className="text-[#081203]/80">With Trekato, you’re not just exploring - you’re earning.</span> 
        </p>
        <form action="https://formsubmit.co/trekato.dev@gmail.com" method="POST">
          <div className="flex flex-col sm:flex-row gap-[10px] items-center">
            <input
              type="email"
              name="email"
              required
              placeholder="vimal@trekato.com"
              className="w-full sm:w-[243px] h-12 rounded-[8px] placeholder:text-[#000000]/30 placeholder:font-geist placeholder:text-[15px] bg-[#F5F5F5] border-none pl-2"
            />
            <Button type="submit" className="h-12 w-full sm:w-auto">
              Get Early Access
            </Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col md:flex-row justify-between p-4 md:p-[45px] items-center bg-white rounded-2xl gap-6 md:gap-0">
        <div className="flex gap-[10px] items-center justify-center">
          <img src="/logo.svg" alt="logo" />
          <h2 className="font-geist font-semibold text-[24px] md:text-[32px]">Trekato</h2>
        </div>
        {/*<div className="flex flex-row items-center justify-center gap-5 text-[16px] font-geist text-black/60">
          <p>Terms</p>
          <p>Privacy</p>
        </div>*/}
        <div className="text-center md:text-left text-[14px] md:text-[16px] font-geist text-black/60">
          © {new Date().getFullYear()} Trekato. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
