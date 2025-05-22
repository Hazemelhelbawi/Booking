import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  return (
    <div id="speciality" className="py-16 text-gray-800 ">
      <div className="flex flex-col text-center items-center justify-center">
        <h1 className="text-3xl font-medium ">Find by Speciality</h1>
        <p className="text-sm  ">
          Simply browse through our extensive list of trusted doctors, schedule{" "}
          <br />
          your appointment hassle-free.
        </p>
      </div>
      <div className="flex  sm:justify-center items-center gap-4 pt-5 w-full overflow-x-auto">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-300"
          >
            <img
              className="w-16 sm:w-24 mb-2"
              src={item.image}
              alt="speciality_img"
            />
            <p className="text-[#4B5563] text-lg">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
