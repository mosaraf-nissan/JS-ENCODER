import React from "react";

const TestimonialCard = ({ client }) => {
  return (
    <div>
      <div className="flex h-[100%] hover:cursor-pointer">
        <div className="flex flex-col bg-white hover:bg-gradient-to-r hover:from-blue-300  rounded-xl  dark:bg-slate-900">
          <div className="flex-auto p-4 md:p-6">
            <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              &quot; {client?.says} &quot;
            </p>
          </div>

          <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-slate-700">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                  src={client?.img}
                  alt="Image Description"
                />
              </div>

              <div className="grow ms-3">
                <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                  {client?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {client?.desig}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
