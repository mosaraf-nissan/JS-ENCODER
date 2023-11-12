import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Button = ({ children }) => {
  return (
    <div>
      {/* <!-- Buttons --> */}
      <div className="flex  justify-center items-center mt-10">
        <a
          className="rounded-lg  relative w-36 h-10 cursor-pointer flex items-center border border-orange-600 bg-orange-600 group hover:bg-orange-600 active:bg-green-500 active:border-green-500"
          href="#"
        >
          <span className="text-gray-200 overflow-hidden font-semibold pl-2 transform group-hover:translate-x-10 transition-all duration-300">
            {children}
          </span>
          <span className="absolute right-0 pl-1 h-full w-10 rounded-lg bg-[#fbf8f6] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <AiOutlineRight className="text-orange-500 text-xl" />
          </span>
        </a>
      </div>

      {/* <!-- End Buttons --> */}
    </div>
  );
};

export default Button;
