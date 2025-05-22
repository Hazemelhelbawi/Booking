import { useContext } from "react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const TopDoctors = () => {
  const { doctors } = useContext(AppContext);
  const navitage = useNavigate();
  return (
    <div className="flex flex-col items-center gsp-4 my-16 text-gray-900 md:mx-10 ">
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-3xl font-medium">Top Doctors to Book</h2>
        <p className=" text-center text-sm ">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            onClick={() => navitage(`/appointment/${doctor._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            // className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10] transition-all duration-500"
          >
            <img src={doctor.image} alt={doctor.name} className="bg-blue-50" />

            <div className="p-4">
              <div className="flex items-center gap-2 ">
                <span
                  className={`w-2 h-2 rounded-full  ${
                    doctor.available ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <span className="text-sm text-gray-500">
                  {doctor.available ? "Available" : "Not Available"}
                </span>
              </div>
              <div className="">
                <h3 className="text-lg font-medium text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600">{doctor.speciality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => {
          navitage("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </Button>
    </div>
  );
};

export default TopDoctors;
