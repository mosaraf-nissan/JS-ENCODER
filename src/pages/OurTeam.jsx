import React from "react";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/Button";
import { FaArrowTurnDown } from "react-icons/fa6";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      img: "./jessan.jpg",
      name: "Jessan Khan",
      desig: "Co-founder & Director",
      linkedin: "https://www.linkedin.com/in/jessankhan/",
      facebook: "https://www.facebook.com/profile.php?id=61554840060805",
    },
    {
      id: 2,
      img: "./david.jpg",
      name: "Benu S.David",
      desig: "Co-Founder, CHRM & Head of Oparetion",
      linkedin: "https://www.linkedin.com/in/benu-s-david-b01244279/",
      facebook: "https://www.facebook.com/profile.php?id=61551631628414",
    },
    {
      id: 3,
      img: "./mamun.png",
      name: "Firoz Al Mamun (Sojol)",
      desig: "Co-founder,Head Of Business Development & Oparetion Manage",
    },
    {
      id: 4,
      img: "./kaiser.png",
      name: "Shahed Kaiser",
      desig: "Digital Marketer & Data Analyst",
    },
    {
      id: 5,
      img: "./rayet.png",
      name: "Rayet Rahman",
      desig: "Digital Marketing Expert",
    },
    {
      id: 6,
      img: "./muksedul.jpg",
      name: "Md Moksedul Islam",
      desig: "Senior Frontend Engineer",
    },
    {
      id: 7,
      img: "./basar.jpg",
      name: "Abul Basar",
      desig: "Lead Frontend Engineer",
      linkedin: "https://www.linkedin.com/in/abulbashar5403/",
    },
    {
      id: 8,
      img: "./baroi.png",
      name: "Dip jit Baroi",
      desig: "Backend Engineer & Floor Incharge",
      linkedin: "https://www.linkedin.com/in/dip-jit-baroi-a79490263/",
    },
  ];
  const oddTeamMembers = [
    {
      id: 9,
      img: "./Arif.jpg",
      name: "K.M. Arif-Uz-Zaman",
      desig: "Software Quality Assurance",
      linkedin: "https://www.linkedin.com/in/k-m-arif-uz-zaman/",
    },
    {
      id: 10,
      img: "./nissan.jpg",
      name: "Md. M. H. Nissan",
      desig: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/mosaraf-nissan/",
    },
  ];
  return (
    <div id="ourteam" className="max-w-[85rem] mx-auto">
      <div className="text-center py-10">
        <div>
          <p className="text-md bg-clip-text bg-gradient-to-l from-orange-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Our Team
          </p>
          <h3 className=" md:text-5xl font-bold dark:text-white">
            Meet Our{" "}
            <span className="bg-clip-text bg-gradient-to-l from-[#6394C6] to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
              Experience
            </span>{" "}
            <br />
            Team Member
          </h3>
        </div>
        <div>
          <p className="dark:text-gray-400 p-1 pt-2">
            Join us and showcase your talent. We value and compensate talented
            members who are eager to join our team. We&apos;re here for you.
          </p>
        </div>
        <div className="w-full">
          <span className="font-semibold w-[100%] mx-auto text-center dark:text-white">
            Send your Resume
          </span>
          <FaArrowTurnDown className="mx-auto text-3xl pt-1 animate-bounce dark:text-white" />

          <Button title="Send Cv" link="mailto:career@jsencoder.com">
            Join With Us
          </Button>
        </div>
      </div>
      <div className="max-w-[58rem] mx-auto grid items-stretch gap-6 grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 ">
        {teamMembers.map((team) => (
          <ProfileCard key={team.id} team={team} />
        ))}
      </div>
      <div className="max-w-[28rem] pt-5 mx-auto grid items-stretch gap-5 grid-cols-1 sm:grid-cols-3  lg:grid-cols-2 ">
        {oddTeamMembers.map((team) => (
          <ProfileCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
