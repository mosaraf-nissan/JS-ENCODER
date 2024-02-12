import Lottie from "lottie-react";
import React from "react";
// lottie animation
import heroAnimation from "../assets/lottie/Animation - 1700073972816.json";

// react-icon
import { AiOutlineRight } from "react-icons/ai";

// react typing import
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
  return (
    // <!-- Hero -->
    <div id="home" className="relative overflow-hidden py-8">
      {/* <!-- Gradients --> */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:w-0 dark:h-0 dark:from-slate-700 dark:to-slate-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] dark:w-[110rem] dark:h-[500rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 "></div>
      </div>
      {/* <!-- End Gradients --> */}
      <div className="h-full absolute">
        <ParticlesContainer />
      </div>
      <div className="relative z-10">
        <div className=" max-w-[85rem] flex flex-col md:flex-row mx-auto justify-center items-center px-4 sm:px-6 lg:px-8 sm:mt-0 md:-mt-14">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-orange-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              JS Encoder: A Best IT Solution
            </p>

            {/* <!-- Title --> */}
            <div className="max-w-3xl max-h-full">
              <h1 className="block font-bold text-gray-800 text-2xl md:text-5xl lg:text-3xl dark:text-gray-200">
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Get The Best Web App for Your Company",
                    3000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Get The Best Software for Your Company",
                    3000,
                    "Get The Best Experience by UI/UX",
                    3000,
                    "Get The Best Solution",
                    3000,
                  ]}
                  wrapper="span"
                  cursor={false} // omit the default css typing animation class
                  className="type text-blue-500"
                  deletionSpeed={60}
                  speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                  repeat={Infinity}
                />
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="mt-5 max-w-3xl">
              <p className="text-lg  text-gray-900 dark:text-gray-400 mb-5">
                <b className="font-bold">From Vision to Victory :</b> Your
                Digital Journey Starts Here. In today&apos;s hyper-connected
                world, standing out requires more than just a website.
                That&apos;s where JS Encoder comes in. We&apos;re not your
                average software company – we&apos;re your digital growth
                hackers, your innovation engineers, your pixel-perfect partners.
              </p>
            </div>

            {/* <!-- Buttons --> */}
            <Button title="Send Message?" link="#contact">
              Get Quote
            </Button>

            {/* <!-- End Buttons --> */}
          </div>
          <div className="max-w-2xl ">
            <Lottie animationData={heroAnimation} />
          </div>
        </div>
      </div>
    </div>
    // <!-- End Hero -->
  );
};

export default Hero;
