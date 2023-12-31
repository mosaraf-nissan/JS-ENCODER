import React from "react";
import Button from "../components/Button";
import CountUp from "react-countup";
import useOnScreen from "../hooks/useOnScreen";

const AboutUs = () => {
  // custom hook for observe the dom
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  return (
    <>
      <div
        id="aboutus"
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-tl dark:from-slate-800 dark:via-slate-800 dark:to-[#1D283A]"
      >
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">
              About JS Encoder
            </h1>
            <p className="mt-3 mb-2 text-lg text-gray-800 dark:text-gray-400">
              JS Encoder provides online marketing campaigns across the key
              areas of Web Development, App Development, SEO etc. We started our
              official December in 2022 with a focus on small online business.
              we try to evolved as a large online marketing firm. Now, we at
              JSEncoder, provides various internet marketing services for small
              and medium-sized business to enterprise brands across the globe
              with a great rate of success.
            </p>

            <div className="mt- lg:mt- flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <Button link="#contact">Contact Us</Button>
            </div>

            {/* Total clients */}
            <div ref={ref} className="mt-6 lg:mt-12 ">
              {visible && (
                <>
                  <span className="text-xl text-gray-800 font-bold dark:text-gray-200">
                    Total number of clients:{" "}
                  </span>
                  <p className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold text-[#4C96DF] inline">
                    <CountUp end={1000} delay={0.5} duration={4} suffix="+" />
                  </p>
                </>
              )}
            </div>
            {/* <!-- End Brands --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <div className="flex justify-center items-center mt-10 lg:mt-0 gap-2 lg:gap-4 flex-col lg:flex-row ">
              <div className="max-w-96 h-96 bg-[#004AAD] p-2 rounded-xl dark:bg-slate-900">
                <div className="max-w-96  h-96 bg-cyan-50 border-4 rounded-xl shadow-md shadow-black/50 p-2 flex flex-col justify-center items-center mt-8 dark:bg-white/5 dark:backdrop-blur-lg dark:shadow-xl dark:shadow-white/2 dark:border-0 dark:text-white">
                  <h3 className="text-2xl font-bold mb-5">
                    We are JS <span className="text-[#6394C6]">Encoder</span>
                  </h3>
                  <p>
                    We are the people who eat, drink, sleep and play with SEO
                    and development. We don&apos;t do work for money, we love
                    this work and that&apos;s why we earn money. We love to work
                    collaboratively with our clients to ensure that the
                    objectives are met by our proven strategies.
                  </p>
                </div>
              </div>
              <div className="max-w-96 h-96 bg-[#004AAD] p-2 rounded-xl dark:bg-slate-900 ">
                <div className="max-w-96 h-96 bg-cyan-50 border-4 rounded-xl shadow-md shadow-black/50 p-2 flex flex-col justify-center items-center -mt-12 dark:bg-white/5 dark:backdrop-blur-lg dark:shadow-xl dark:shadow-white/2 dark:border-0 dark:text-white">
                  <h3 className="text-2xl font-bold mb-5">
                    How We <span className="text-[#4c96df]">Formed</span>
                  </h3>
                  <p>
                    When we started we had nothing more than few computers, now
                    have 18 members in our team. How we did it? We formed with
                    very easy calculation, gradually with 1,2,3,4…..18 by
                    satisfying over 300 clients for SEO, SMM and Development
                    Projects for the last six years.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </>
  );
};

export default AboutUs;
