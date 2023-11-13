import React from "react";
import ServiceCard from "../../components/ServiceCard";

import { FaCode } from "react-icons/fa";

const ExcluServices = () => {
  const services = [
    {
      id: 1,
      img: "./webdev.png",
      icon: <FaCode />,
      title: "Web Development",
      desc: "We specialize in crafting bespoke websites that seamlessly blend creativity with cutting-edge technology. From intuitive user interfaces to robust backend solutions, we bring your vision to life. Elevate your digital footprint with our tailored web development services. Contact us to turn your ideas into a captivating online reality.",
    },
    {
      id: 2,
      img: "./moapp.png",
      icon: <FaCode />,
      title: "Mobile App Development",
      desc: "Explore new horizons with our tailored mobile app development services. We specialize in creating apps that seamlessly blend innovation, functionality, and user appeal. Elevate your brand presence and engage your audience effectively. Ready to bring your app idea to life? Let's make it happen together  contact us now!",
    },
    {
      id: 3,
      img: "./server.png",
      icon: <FaCode />,
      title: "Server Security",
      desc: "Secure your digital foundation with JS Encoder. Our server security solutions provide impenetrable protection, ensuring your data stays safe and your operations run smoothly. Don't let cyber threats compromise your business—partner with us for unparalleled server security.",
    },
    {
      id: 4,
      img: "./uiux.png",
      icon: <FaCode />,
      title: "Ui/Ux Strategy",
      desc: "At Js Encoder, we're architects of exceptional digital interactions. Our UI/UX strategy services redefine user experiences, seamlessly blending innovation with usability. Whether it's crafting intuitive interfaces or optimizing user journeys, we specialize in creating digital spaces that captivate and convert. Let us transform your vision into a user-centric reality where design meets functionality for unparalleled impact.",
    },
    {
      id: 5,
      img: "./dhosting.png",
      icon: <FaCode />,
      title: "Domain Hosting Service",
      desc: "At JS Encoder, we provide more than just hosting we empower your digital identity. Our domain hosting services offer reliable, secure, and lightning-fast solutions to ensure your website is always accessible. With top-notch security measures and seamless scalability, we make your online journey a breeze. Elevate your web presence today trust us to host your domain and make your mark in the digital realm.",
    },
    {
      id: 6,
      img: "./dmark.png",
      icon: <FaCode />,
      title: "Digital Marketing",
      desc: "Our digital marketing prowess transforms clicks into customers and ideas into impact. Let's boost your brand, elevate your presence, and make every digital moment count. Ready to dominate the online landscape? Partner with us for digital marketing that delivers results.",
    },
  ];
  return (
    <div className=" pt-14 bg-gradient-to-tl dark:from-slate-800 dark:via-slate-800 dark:to-[#1D283A]">
      <div>
        <p className="text-center text-sm font-medium bg-clip-text bg-gradient-to-l from-orange-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
          WHAT WE DO
        </p>
        <h2 className="text-center text-5xl font-bold dark:text-white pb-10">
          We Provide{" "}
          <span className="bg-clip-text bg-gradient-to-l from-[#6394C6] to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Exclusive
          </span>{" "}
          Services For <br /> Your{" "}
          <span className="bg-clip-text bg-gradient-to-l from-[#6394C6] to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            Business
          </span>
        </h2>
      </div>
      <div className="max-w-[60rem] pb-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ExcluServices;
