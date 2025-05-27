import Button from "./ui/Button";

const BookingSlots = ({
  weeklySlots,
  slotIndex,
  setSlotIndex,
  slotTime,
  setSlotTime,
}) => {
  const daysOfWeek = ["SUN", "Mon", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
      <p>Booking Slots</p>

      <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
        {weeklySlots.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSlotIndex(index);
              setSlotTime("");
            }}
            className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
              slotIndex === index
                ? "bg-primary text-white"
                : "border border-gray-200 text-gray-600"
            } transition-all duration-300`}
          >
            <p>{daysOfWeek[item.date.getDay()]}</p>
            <p>{item.date.getDate()}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
        {weeklySlots[slotIndex]?.slots.map((item, index) => (
          <p
            key={index}
            onClick={() => setSlotTime(item.time)}
            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
              item.time === slotTime
                ? "bg-primary text-white"
                : "text-gray-600 border border-gray-300"
            }`}
          >
            {item.time.toLowerCase()}
          </p>
        ))}
      </div>

      <Button className="bg-primary text-white font-light px-14 py-3 rounded-full my-6 ">
        Book an Appointment
      </Button>
    </div>
  );
};

export default BookingSlots;
