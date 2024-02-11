import React from "react";
import { GiWallet, GiScales } from "react-icons/gi";
import { BsDatabaseFillLock } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import "./heroFooter.css";

const HeroFooter = () => {
  return (
    <div className="bg-gradient-to-tl dark:from-slate-800 dark:via-slate-800 dark:to-[#131C2F] pb-10 l">
      <div className="bg-gradient-to-r from-[#93acfa] via-[#e1ecf4] to-[#8ab8f4] dark:backdrop-blur-lg dark:from-white/5 dark:shadow-lg dark:shadow-white/10 max-w-[1280px] mx-auto p-3 rounded-md">
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4  text-xl font-bold text-white w-fit mx-auto gap-6">
            <div className="flex box flex-col justify-center items-center border rounded-md  p-2">
              <div className="rounded-full z-50 border-2 border-[#6394C6] p-3 dark:border-cyan-200">
                <GiWallet className="text-5xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6]   rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse " />
              </div>

              <div className="z-50 text-[16px] font-mono">
                Affordable Pricing
              </div>
            </div>
            <div className="flex box flex-col justify-center items-center border rounded-md  p-2">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200 z-10">
                <BsDatabaseFillLock className="text-5xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6]  rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse " />
              </div>
              <span className="z-50 text-[16px] font-mono">
                Secure & Reliable
              </span>
            </div>
            <div className="flex box flex-col justify-center items-center border rounded-md p-2">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200 z-10">
                <GiScales className="text-5xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6] rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse" />
              </div>
              <span className="z-50 text-[16px] font-mono">
                Scalable & Adaptable
              </span>
            </div>
            <div className="flex box flex-col justify-center items-center border rounded-md p-2 ">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200 z-10">
                <BiSupport className="text-5xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6]  rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse" />
              </div>
              <span className="z-50 text-[16px] font-mono">
                24/7 Time Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
