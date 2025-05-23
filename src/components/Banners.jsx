import { assets } from "../assets/assets";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
const Banners = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 md:mx-10 ">
      {/* ----------left side---------- */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
          Book Appointment <br className="mt-5" /> With 100+ Trusted Doctors
        </h2>
        <Button
          onClick={() => {
            navigate(`/login`);
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300"
        >
          Create account
        </Button>
      </div>

      {/* ----------right side---------- */}
      <div className="md:w-1/2 hidden md:block lg:w-[370px] relative ">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="banner_img"
        />
      </div>
    </div>
  );
};

export default Banners;
