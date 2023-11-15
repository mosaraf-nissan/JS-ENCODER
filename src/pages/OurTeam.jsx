import React from "react";
import ProfileCard from "../components/ProfileCard";
import Button from "../components/Button";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      img: "./david.jpg",
      name: "Benu S.David",
      desig: "Co-founder & HR",
    },
    {
      id: 2,
      img: "./jessan.jpg",
      name: "Jessan Khan",
      desig: "Co-founder & Director",
    },
    {
      id: 3,
      img: "./mamun.png",
      name: "Md Firoz Al Mamun",
      desig: "Co-founder & Team Manager",
    },
    {
      id: 4,
      img: "./pradip.png",
      name: "Pradip Sarker",
      desig: "Technical advisor",
    },
    {
      id: 5,
      img: "./basar.jpg",
      name: "Abul Basar",
      desig: "Web Developer",
    },
    {
      id: 6,
      img: "./baroi.png",
      name: "Dip jit Baroi",
      desig: "Backend Developer",
    },
    {
      id: 7,
      img: "./kaiser.png",
      name: "Shahed Kaiser",
      desig: "Full-Stack Developer",
    },
    {
      id: 8,
      img: "./rayet.png",
      name: "Rayet Rahman",
      desig: "Digital Marketing Expert",
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
          <Button title="Send Cv" link="mailto:info@jsencoder.com">
            Join With Us
          </Button>
        </div>
      </div>
      <div className="max-w-[60rem] mx-auto grid grid-cols-1 sm:grid-cols-3  lg:grid-cols-4 gap-6">
        {teamMembers.map((team) => (
          <ProfileCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
