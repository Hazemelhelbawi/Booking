import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import Button from "../components/ui/Button";

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors, specialityData, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === doctorId);
    setDocInfo(docInfo);
    console.log("docInfo", docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctorId, doctors]);
  return (
    docInfo && (
      <div>
        {/*------------- doctors details -------------*/}

        <div className="flex flex-col sm:flex-row gap-4 ">
          <div>
            <img
              src={docInfo?.image}
              alt={docInfo?.name}
              className="bg-primary w-full sm:max-w-72  rounded-lg"
            />
          </div>
          <div className="flex-1 gap-2 p-8  border border-gray-400 rounded-lg py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ------------- doctors info : name , degree , expirence -------------*/}
            <div className="flex items-center gap-2 text-xl font-medium text-gray-900">
              <p>{docInfo?.name}</p>
              <img
                className="w-5"
                src={assets.verified_icon}
                alt="verified_icon"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <span>{docInfo?.degree}</span>
              <span>-</span>
              <span>{docInfo?.speciality}</span>

              <Button className="py-0.5 px-2 border text-xs rounded-full ">
                {docInfo.experience}
              </Button>
            </div>

            {/*------------- doctors about------------- */}
            <div>
              <p className="text-gray-900 flex items-center gap-2 text-sm font-medium mt-3">
                <span className="text-gray-600 font-semibold">About</span>
                <img src={assets.info_icon} alt="info_icon" />
              </p>
              <p className="text-gray-500 text-sm max-w-[700px] mt-1">
                {docInfo?.about}
              </p>
            </div>

            {/* Appointment fee */}
            <div className="flex items-center gap-2 mt-4 text-gray-600">
              <p className=" font-medium ">Appointment fee:</p>
              <span className="text-gray-500 text-sm">
                {currencySymbol} {docInfo.fees}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
