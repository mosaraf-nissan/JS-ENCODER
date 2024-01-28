import React, { useState } from "react";
import ReadMore from "./ReadMore";

const ServiceCard = ({ service }) => {
  const { title, desc } = service;

  return (
    <div className="px-2">
      <div className="flex flex-col bg-white border shadow-md shadow-black rounded-xl dark:bg-black/40 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <img
          className="w-full h-auto rounded-t-xl"
          src={service.img}
          alt="Image Description"
        />
        <div className="p-4 md:p-5 transition-all duration-500">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            <ReadMore text={desc} maxLength={100} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
