import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";

// react icons for dark and light
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  // Dark Mode toggle state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      console.log(isDarkMode);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Scrollingto the section
  const scrollToSection = (section) => {
    const home = document.getElementById(section);
    const aboutUs = document.getElementById(section);
    // aboutButton for active
    const aboutBt = document.getElementById("aboutBt");
    // careerButton
    const careerBt = document.getElementById("careerBt");
    // contactButton
    const contactBt = document.getElementById("contactBt");
    const services = document.getElementById(section);
    const career = document.getElementById(section);
    const contact = document.getElementById(section);

    // Check which section is clicked and scroll to that section
    if (section === "home" && home) {
      home.scrollIntoView({ behavior: "smooth" }, true);
      aboutBt.classList.remove("border-b-4");
      aboutBt.classList.remove("border-b-orange-500");
      careerBt.classList.remove("border-b-4");
      careerBt.classList.remove("border-b-orange-500");
      contactBt.classList.remove("border-b-4");
      contactBt.classList.remove("border-b-orange-500");
    }

    if (section === "aboutus" && aboutUs) {
      // remove others active button
      careerBt.classList.remove("border-b-4");
      careerBt.classList.remove("border-b-[#004AAD]");
      contactBt.classList.remove("border-b-4");
      contactBt.classList.remove("border-b-[#004AAD]");
      aboutUs.scrollIntoView({ behavior: "smooth", block: "center" });
      // add active button
      aboutBt.classList.add("border-b-4");
      aboutBt.classList.add("border-b-[#004AAD]");
    }
    //service section
    else if (section === "service" && services) {
      services.scrollIntoView({ behavior: "smooth" }, true);
      // remove all active button
      aboutBt.classList.remove("border-b-4");
      aboutBt.classList.remove("border-b-[#004AAD]");
      careerBt.classList.remove("border-b-4");
      careerBt.classList.remove("border-b-[#004AAD]");
      contactBt.classList.remove("border-b-4");
      contactBt.classList.remove("border-b-[#004AAD]");
    }
    // career section
    else if (section === "ourteam" && career) {
      // add active button
      careerBt.classList.add("border-b-4");
      careerBt.classList.add("border-b-[#004AAD]");
      // remove active button other's
      aboutBt.classList.remove("border-b-4");
      aboutBt.classList.remove("border-b-[#004AAD]");
      contactBt.classList.remove("border-b-4");
      contactBt.classList.remove("border-b-[#004AAD]");
      // scroll to the section
      career.scrollIntoView({ behavior: "smooth" }, true);
    }
    // contact section
    else if (section === "contact" && contact) {
      // add active button
      contactBt.classList.add("border-b-4");
      contactBt.classList.add("border-b-[#004AAD]");
      contact.scrollIntoView({ behavior: "smooth" }, true);
      // remove others active button
      aboutBt.classList.remove("border-b-4");
      aboutBt.classList.remove("border-b-[#004AAD]");
      careerBt.classList.remove("border-b-4");
      careerBt.classList.remove("border-b-[#004AAD]");
    }
  };

  return (
    <header className="sticky top-0  flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full  bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 border-b border-gray-200 text-sm py-3 sm:py-0  dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 dark:border-0">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-0"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <p
            id="homeBt"
            onClick={() => {
              scrollToSection("home");
            }}
            className="cursor-pointer animationLogo w-52 flex-none text-xl font-semibold dark:text-white"
            aria-label="logo"
          >
            {/* JS Encoder Logo */}
            <img
              className="object-contain w-52"
              src="/jsencoderLogo.png"
              alt="JsEncoderLogo"
            />
          </p>
          {/* burger menu and close */}
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden text-lg font-semibold overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <p
              id="aboutBt"
              onClick={() => {
                scrollToSection("aboutus");
              }}
              className="cursor-pointer text-gray-500 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-500"
              aria-current="page"
            >
              About
            </p>
            {/* service dropdown */}
            <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
              <button
                type="button"
                className="flex items-center w-full text-gray-500 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-500 "
              >
                Services
                <svg
                  className="ms-2 w-2.5 h-2.5 text-gray-600"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
              {/* services list in dropdown */}
              <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-50 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                <a
                  id="serviceBt"
                  onClick={() => {
                    scrollToSection("service");
                  }}
                  className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Web Development
                </a>

                <a
                  onClick={() => {
                    scrollToSection("service");
                  }}
                  className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  App Development
                </a>
                <a
                  onClick={() => {
                    scrollToSection("service");
                  }}
                  className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Web Hosting
                </a>
                <a
                  onClick={() => {
                    scrollToSection("service");
                  }}
                  className="cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  SEO
                </a>
              </div>
            </div>
            <p
              id="careerBt"
              onClick={() => {
                scrollToSection("ourteam");
              }}
              className="cursor-pointer text-gray-500 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-500"
            >
              Career
            </p>
            <a
              id="contactBt"
              onClick={() => {
                scrollToSection("contact");
              }}
              className="cursor-pointer text-gray-500 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-500"
            >
              Contact
            </a>
            <a
              href="https://jsencoder.com/webmail/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-gray-800 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-500"
            >
              <MdEmail className="text-xl" />
            </a>
            {/* todo darkMode toggle */}
            {isDarkMode ? (
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <BsFillSunFill />
              </button>
            ) : (
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="font-medium text-gray-700 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              >
                <BsMoonStarsFill />
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
