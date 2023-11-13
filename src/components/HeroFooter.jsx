import React from "react";
import { GiWallet, GiScales } from "react-icons/gi";
import { BsDatabaseFillLock } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const HeroFooter = () => {
  return (
    <div className="bg-gradient-to-tl dark:from-slate-800 dark:via-slate-800 dark:to-[#131C2F] pb-10">
      <div className="bg-gradient-to-r from-[#4c96df] via-[#2f74a8] to-[#2a71a7] dark:from-slate-500 max-w-[1280px] mx-auto p-3">
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-10 text-xl font-bold text-white">
            <div className="flex flex-col justify-center items-center border rounded-md  p-2">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200">
                <GiWallet className="text-7xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6]  rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse " />
              </div>

              <div>Affordable Pricing</div>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md  p-2">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200">
                <BsDatabaseFillLock className="text-7xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6]  rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse " />
              </div>
              <span>Secure & Reliable</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md p-2">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200">
                <GiScales className="text-7xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6] rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse" />
              </div>
              <span>Scalable & Adaptable</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md p-2 ">
              <div className="rounded-full border-2 border-[#6394C6] p-3 dark:border-cyan-200">
                <BiSupport className="text-7xl bg-gradient-to-r from-[#4d7ba8] to-[#6394C6]  rounded-full p-1 transition-all duration-300 hover:p-2 animate-pulse" />
              </div>
              <span>24/7 Real Time Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
