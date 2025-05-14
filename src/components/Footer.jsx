import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt40 text-sm">
        {/* ---------left side--------- */}
        <div>
          <img className="w-40" src={assets.logo} alt="logo" />
          <p className="text-gray-600 pt-3 leading-6 text-sm  w-full">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* ---------Center side--------- */}
        <div>
          <p className="text-xl font-medium ">COMPANY</p>
          <ul className="text-gray-600 pt-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        {/* ---------Right side--------- */}
        <div>
          <p className="text-xl font-medium ">GET IN TOUCH</p>
          <ul className="text-gray-600 pt-3">
            <li>+201012345678</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* ---------bottom side--------- */}
        <hr />
        <p className="text-center py-5 text-sm ">
          Copyright © 2025 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
