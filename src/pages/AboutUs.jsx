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
        className="max-w-[85rem] text-center md:text-start mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-tl dark:from-slate-800 dark:via-slate-800 dark:to-[#1D283A]"
      >
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">
              About US
            </h1>
            <p className="mt-3 mb-2 text-lg text-gray-800 dark:text-gray-400">
              Fresh Thinking, Agile Delivery: We ditch the outdated and embrace
              the innovative, all while keeping your project moving at the speed
              of light. Pixel-Perfect Design: We don&apos;t just code, we create
              experiences. Websites that captivate, apps that feel intuitive,
              and software that&apos;s a joy to use. Data-Driven Decisions: We
              don&apos;t guess, we analyze. We use data to craft solutions that
              deliver real, measurable results for your business. Your Success
              Story, Our Passion: We&apos;re not just working on a project,
              we&apos;re invested in your vision. Your success is our success,
              and we&apos;ll go the extra mile to make it happen. Ready to
              unleash your digital potential? Partner with JS Encoder and
              let&apos;s code your victory, one line of code at a time.
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
            <div className="flex container justify-center items-center mt-10 lg:mt-0 gap-2 lg:gap-4 flex-col lg:flex-row ">
              <div className="md:w-[50%] h-96 bg-[#004AAD] p-2 rounded-xl dark:bg-slate-900">
                <h3 className="text-2xl font-bold text-white text-center">
                  We are JS <span className="">Encoder</span>
                </h3>
                <div className="h-fit bg-cyan-50 border-4 rounded-xl shadow-md shadow-black/50 p-2 flex flex-col justify-center items-center mt-4 dark:bg-white/5 dark:backdrop-blur-lg dark:shadow-xl dark:shadow-white/2 dark:border-0 dark:text-white">
                  <p>
                    <b>Code. Craft. Conquer.</b> We&apos;re JS Encoder, and
                    we&apos;re not your average software company. We&apos;re
                    passionate creators, problem solvers, and code whisperers,
                    obsessed with building exceptional web, mobile, and
                    enterprise software that propels your business forward.
                    Forget the 9-to-5 grind. We breathe innovation, fuel our
                    minds with coffee (and maybe a little code), and chase
                    results like they&apos;re the last slice of pizza. We
                    don&apos;t just work for money, we work for impact, for the
                    thrill of seeing your vision come to life, pixel by pixel.
                  </p>
                </div>
              </div>
              <div className="mt-16 md:w-[50%] h-96 bg-[#004AAD] p-2 rounded-xl dark:bg-slate-900 ">
                <h3 className="text-2xl text-center font-bold text-white">
                  How We <span className="">Formed</span>
                </h3>
                <div className=" mt-5 bg-cyan-50 border-4 rounded-xl shadow-md shadow-black/50 p-2 flex flex-col justify-center items-center -mt- dark:bg-white/5 dark:backdrop-blur-lg dark:shadow-xl dark:shadow-white/2 dark:border-0 dark:text-white">
                  <p>
                    <b> They say :</b> every journey begins with a single step.
                    Ours started in a small room, fueled by the passion of 6
                    developers and 3 co-founders with a shared dream: to build
                    innovative software solutions that empower businesses. We
                    weren&apos;t armed with an army of resources, just a few
                    computers and a relentless drive. Instead of chasing quick
                    wins, we focused on building trust and expertise, one
                    satisfied client at a time.We started by helping Canadian
                    pioneers like you thrive online with custom software
                    tailored to their unique needs. Local Clients use our custom
                    e-commerce websites and POS solutions, we poured our hearts
                    into solving their problems and exceeding expectations.
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
