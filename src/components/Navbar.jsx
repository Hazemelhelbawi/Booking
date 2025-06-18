import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Button from "./ui/Button";
import Dropdown from "./ui/Dropdown";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <img
              src={assets.logo}
              alt="logo"
              className="w-[150px] h-[80px] object-cover"
            />
          </NavLink>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-start gap-5 font-medium">
          <li className="text-center">
            <NavLink to="/" className="block py-1">
              {({ isActive }) => (
                <>
                  <span className="py-1">HOME</span>
                  <hr
                    className={`h-0.5 bg-primary w-3/4 m-auto mt-1 transition-transform duration-300 transform origin-center ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/doctors" className="block py-1">
              {({ isActive }) => (
                <>
                  <span className="py-1">ALL DOCTORS</span>
                  <hr
                    className={`h-0.5 bg-primary w-3/4 m-auto mt-1 transition-transform duration-300 transform origin-center ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/about" className="block py-1">
              {({ isActive }) => (
                <>
                  <span className="py-1">ABOUT</span>
                  <hr
                    className={`h-0.5 bg-primary w-3/4 m-auto mt-1 transition-transform duration-300 transform origin-center ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/contact" className="block py-1">
              {({ isActive }) => (
                <>
                  <span className="py-1">CONTACT</span>
                  <hr
                    className={`h-0.5 bg-primary w-3/4 m-auto mt-1 transition-transform duration-300 transform origin-center ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>
          {/* <NavLink to="/login">Login</NavLink> */}
        </ul>

        <div className="flex items-center gap-4">
          {/* <button className="bg-primary text-white md:px-8 py-2.5 rounded-full">
          Create Account
        </button> */}

          {isLogin ? (
            <div className="z-50 flex items-center gap-2 cursor-pointer group relative">
              <img
                className="w-8 rounded-full"
                src={assets.profile_pic}
                alt=""
              />
              <img className="w-2.5" src={assets.dropdown_icon} alt="" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100  rounded flex flex-col gap-4 p-4">
                  <Dropdown
                    className="hover:text-black cursor-pointer"
                    options={[
                      {
                        label: "My Profile",
                        onClick: () => navigate("/profile"),
                      },
                      {
                        label: "My Appointments",
                        onClick: () => navigate("/my-appointment"),
                      },
                      { label: "Logout", onClick: () => setIsLogin(false) },
                    ]}
                  />
                </div>
              </div>
            </div>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className="bg-primary text-white px-8 py-3 md:block  font-light hidden rounded-full "
            >
              Create Account
            </Button>
          )}

          {/* Burger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 font-medium bg-white shadow-md absolute top-28 left-0 w-full z-50 md:hidden p-6">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>
              ALL DOCTORS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </NavLink>
          </li>
          {!isLogin && (
            <Button
              onClick={() => {
                setMenuOpen(false);
                navigate("/login");
              }}
              className="bg-primary text-white px-8 py-3 font-light rounded-full"
            >
              Create Account
            </Button>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
