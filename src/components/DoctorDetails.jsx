import { assets } from "../assets/assets";
import Button from "./ui/Button";

const DoctorDetails = ({ docInfo, currencySymbol }) => {
  if (!docInfo) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div>
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className="bg-primary w-full sm:max-w-72 rounded-lg"
        />
      </div>
      <div className="flex-1 gap-2 p-8 border border-gray-400 rounded-lg py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
        <div className="flex items-center gap-2 text-xl font-medium text-gray-900">
          <p>{docInfo.name}</p>
          <img className="w-5" src={assets.verified_icon} alt="verified" />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
          <span>{docInfo.degree}</span>
          <span>-</span>
          <span>{docInfo.speciality}</span>
          <Button className="py-0.5 px-2 border text-xs rounded-full cursor-default">
            {docInfo.experience}
          </Button>
        </div>

        <div>
          <p className="text-gray-900 flex items-center gap-2 text-sm font-medium mt-3">
            <span className="text-gray-600 font-semibold">About</span>
            <img src={assets.info_icon} alt="info_icon" />
          </p>
          <p className="text-gray-500 text-sm max-w-[700px] mt-1">
            {docInfo.about}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-4 text-gray-600">
          <p className="font-medium">Appointment fee:</p>
          <span className="text-gray-500 text-sm">
            {docInfo.fees} {currencySymbol}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
