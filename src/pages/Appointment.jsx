import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DoctorDetails from "../components/DoctorDetails";
import BookingSlots from "../components/BookingSlots";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [weeklySlots, setWeeklySlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    const doc = doctors.find((d) => d._id === doctorId);
    setDocInfo(doc);
  }, [doctorId, doctors]);

  useEffect(() => {
    if (!docInfo) return;

    const today = new Date();
    const slots = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      const start = new Date(date);
      const end = new Date(date);
      end.setHours(21, 0, 0, 0);

      if (i === 0) {
        const now = new Date();
        start.setHours(now.getHours() > 10 ? now.getHours() + 1 : 10);
        start.setMinutes(now.getMinutes() > 30 ? 30 : 0);
      } else {
        start.setHours(10, 0, 0, 0);
      }

      const daySlots = [];
      while (start <= end) {
        daySlots.push({
          datetime: new Date(start),
          time: start.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        start.setMinutes(start.getMinutes() + 30);
      }

      return { date, slots: daySlots };
    });

    setWeeklySlots(slots);
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        <DoctorDetails docInfo={docInfo} currencySymbol={currencySymbol} />
        <BookingSlots
          weeklySlots={weeklySlots}
          slotIndex={slotIndex}
          setSlotIndex={setSlotIndex}
          slotTime={slotTime}
          setSlotTime={setSlotTime}
        />
        <RelatedDoctors docId={doctorId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
