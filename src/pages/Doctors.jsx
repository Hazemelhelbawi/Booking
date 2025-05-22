import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Doctors = () => {
  const { speciality } = useParams();
  const { doctors, specialityData } = useContext(AppContext);
  console.log("doctors", specialityData);
  const navigate = useNavigate();

  // هنا نستخدم useEffect ,useCallback ,useState لتخزين الأطباء الذين سيتم عرضهم
  // const [fliterDoc, setFliterDoc] = useState([]);
  // const filterDoctors = useCallback(() => {
  //   if (speciality) {
  //     setFliterDoc(doctors.filter((doc) => doc.speciality === speciality));
  //   } else {
  //     setFliterDoc(doctors);
  //   }
  // }, [speciality, doctors]);

  // useEffect(() => {
  //   filterDoctors();
  // }, [filterDoctors]);

  // هنا نستخدم useMemo لتخزين الأطباء الذين سيتم عرضهم
  const filteredDoctors = useMemo(() => {
    if (speciality) {
      return doctors.filter((doc) => doc.speciality === speciality);
    }
    return doctors;
  }, [speciality, doctors]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5  ">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          {specialityData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() =>
                speciality === item.speciality
                  ? navigate("/doctors")
                  : navigate(`/doctors/${item.speciality}`)
              }
            >
              <p
                className={`${
                  speciality === item.speciality ? "bg-[#E2E5FF]" : ""
                }  text-gray-600 w-[94vw] sm:w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
              >
                {item.speciality}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {/* {fliterDoc.map((doctor) => ( */}
          {filteredDoctors.map((doctor) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={doctor._id}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              // className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10] transition-all duration-500"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="bg-blue-50"
              />

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
      </div>
    </div>
  );
};

export default Doctors;
