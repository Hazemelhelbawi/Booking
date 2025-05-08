import React from "react";
import { assets } from "../assets/assets";
import Button from "./ui/Button";
const Header = () => {
  return (
    <div className="bg-primary flex flex-col md:flex-row flex-wrap justify-center items-center rounded-lg px-6 md:px-10 lg:px-20">
      <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] ">
        <h1 className="text-white text-3xl md:text-4xl font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment
          <br />
          With Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-center text-white text-sm font-light gap-3">
          <img
            className="w-28"
            src={assets.group_profiles}
            alt="group_profiles"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="flex items-center ">
          <Button
            href="#speciality"
            className="flex items-center gap-2 bg-white rounded-full px-8 py-3 text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          >
            <span>Book Appointment</span>
            <img className="w-3" src={assets.arrow_icon} alt="arrow_icon" />
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 w-full relative min-h-[400px]">
        <img
          src={assets.header_img}
          alt="logo"
          className="md:absolute bottom-0 right-0 md:w-auto w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
