import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Button = ({ children, link, title }) => {
  return (
    <div>
      {/* <!-- Buttons --> */}
      <div title={title} className="flex  justify-center items-center mt-10">
        <a
          className="rounded-lg  relative w-36 h-10 cursor-pointer flex items-center border border-[#6394C6] bg-[#004AAD] group hover:bg-[#4c96df] active:bg-[#4c96df] active:border-[#6394C6]"
          href={link}
        >
          <span className="text-white overflow-hidden font-semibold pl-2 transform group-hover:translate-x-10 transition-all duration-300">
            {children}
          </span>
          <span className="absolute right-0 pl-1 h-full w-10 rounded-lg bg-[#fbf8f6] flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
            <AiOutlineRight className="text-[#6394C6] text-xl" />
          </span>
        </a>
      </div>

      {/* <!-- End Buttons --> */}
    </div>
  );
};

export default Button;
