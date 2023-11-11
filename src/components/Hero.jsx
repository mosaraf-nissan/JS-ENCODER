import Lottie from "lottie-react";
import React from "react";
import heroAnimation from "../assets/lottie/Animation - 1699699047899.json";
import { AiOutlineCaretDown } from "react-icons/ai";

const Hero = () => {
  return (
    // <!-- Hero -->
    <div className="relative overflow-hidden">
      {/* <!-- Gradients --> */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
        <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70 "></div>
      </div>
      {/* <!-- End Gradients --> */}

      <div className="relative z-10">
        <div className="max-w-[85rem] flex flex-col md:flex-row mx-auto justify-center items-center px-4 sm:px-6 lg:px-8 sm:mt-0 md:-mt-14">
          <div className="max-w-2xl text-center mx-auto">
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-orange-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              JS Encoder: A Best IT Solution
            </p>

            {/* <!-- Title --> */}
            <div className="max-w-2xl">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Get The Best Website and App for Your Company
              </h1>
            </div>
            {/* <!-- End Title --> */}

            <div className="mt-5 max-w-3xl">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Design your website with the best web developers in Bangladesh.
                Our Developers have almost 10 years experiences in this field.
              </p>
            </div>

            {/* <!-- Buttons --> */}
            <div className="flex justify-center items-center mt-10">
              <button
                className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-b-0 text-black/90 font-bold border-blue-200 shadow-md shadow-orange-300  dark:from-blue-400 dark:to-violet-400
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#2A93DE] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              >
                Explore More <AiOutlineCaretDown className="inline" />
              </button>
            </div>

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
