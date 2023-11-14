import React from "react";
import CountUp from "react-countup";
import useOnScreen from "../hooks/useOnScreen";

const Stats = () => {
  // custom hook
  const [ref, visible] = useOnScreen({ rootMargin: "0px" });
  return (
    <div>
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        {/* <!-- Stats --> */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Accuracy rate
          </h4>
          <p
            ref={ref}
            className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500"
          >
            {visible && (
              <CountUp
                end={99.95}
                decimals={2}
                delay={0.5}
                duration={4}
                suffix="%"
              />
            )}
          </p>
          <p className="mt-1 text-gray-400">in fulfilling orders</p>
        </div>
        {/* <!-- End Stats --> */}

        {/* <!-- Stats --> */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Completed Project
          </h4>
          <p
            ref={ref}
            className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500"
          >
            {visible && (
              <CountUp end={2000} delay={0.5} duration={4} suffix="+" />
            )}
          </p>
          <p className="mt-1 text-gray-400"> with JS Encoder</p>
        </div>
        {/* <!-- End Stats --> */}

        {/* <!-- Stats --> */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Happy customer
          </h4>
          <p
            ref={ref}
            className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500"
          >
            {visible && (
              <CountUp
                end={89.99}
                decimals={2}
                delay={0.5}
                duration={4}
                suffix="%"
              />
            )}
          </p>
          <p className="mt-1 text-gray-400">this year alone</p>
        </div>
        {/* <!-- End Stats --> */}
      </div>
    </div>
  );
};

export default Stats;
