import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);

  const [relDoc, setRelDoc] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-3xl font-medium">Related Doctors</h2>
      </div>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((doctor, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
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
    </>
  );
};

export default RelatedDoctors;
