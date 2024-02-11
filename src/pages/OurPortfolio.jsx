import React from "react";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import { FaArrowTurnDown } from "react-icons/fa6";
import Button from "../components/Button";

const OurPortfolio = () => {
  const projects = [
    {
      id: 0,
      img: "/jar.png",
      link: "https://mydatejar.com/",
    },
    {
      id: 1,
      img: "/food.png",
      link: "https://www.foodjocky.com/",
    },
    {
      id: 2,
      img: "/deliver.png",
      link: "https://livo.ma/",
    },
    {
      id: 3,
      img: "/forex.png",
      link: "https://www.instaforex.com/",
    },
    {
      id: 4,
      img: "/dandy.png",
      link: "https://dandytek.com/",
    },
    {
      id: 5,
      img: "/flight.png",
      link: "https://airbliss-flight-booking.web.app/",
    },
    {
      id: 6,
      img: "/sugar.png",
      link: "https://lanticrogers.com/",
    },
    {
      id: 7,
      img: "/furniture.png",
      link: "https://www.918main.com/",
    },
  ];
  return (
    <div className="pt-10 max-w-[60rem] mx-auto">
      <div>
        <p className="text-center text-sm font-medium bg-clip-text bg-gradient-to-l from-orange-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          WHAT WE DO
        </p>
        <h2 className="text-center md:text-5xl font-bold dark:text-white">
          Our{" "}
          <span className="bg-clip-text bg-gradient-to-l from-[#6394C6] to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Portfolio
          </span>
        </h2>
        <p className="text-gray-800 pt-1 pb-8 dark:text-gray-300 p-2 text-center ">
          We work for customer satisfaction and happiness! We have done it over
          and over again. Look through our many web design and development
          projects and feel the vibe in you. Our hard work and expertise drove
          us into the best web design company in Bangladesh and worldwide. We
          just don&apos;t just want to tell, we want to show you too.
          <br />
          <span className="font-bold">Get In Touch</span>
        </p>
        <div className="-mt-5 pb-10">
          <FaArrowTurnDown className="mx-auto text-3xl pt-1 animate-bounce dark:text-white" />

          <div className="w-[7.5rem] mx-auto">
            <Button
              title="Get in Touch"
              link="https://www.linkedin.com/company/js-encoder/"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-fit mx-auto grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project?.id}>
            <ProjectCard key={project.id} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPortfolio;
