import { createContext, useContext, useState } from "react";
import { assets } from "../assets/assets";

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorName: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      date: "2024-03-20",
      time: "10:00 AM",
      status: "upcoming",
      image: assets.doc1,
      hospital: "City General Hospital",
      address: "123 Medical Center Drive",
    },
    {
      id: 2,
      doctorName: "Dr. Michael Chen",
      specialization: "Neurologist",
      date: "2024-03-15",
      time: "2:30 PM",
      status: "upcoming",
      image: assets.doc2,
      hospital: "St. Mary's Medical Center",
      address: "456 Health Avenue",
    },
    {
      id: 3,
      doctorName: "Dr. Emily Brown",
      specialization: "Pediatrician",
      date: "2024-03-10",
      time: "11:15 AM",
      status: "completed",
      image: assets.doc3,
      hospital: "Children's Hospital",
      address: "789 Care Street",
    },
    {
      id: 4,
      doctorName: "Dr. James Wilson",
      specialization: "Dermatologist",
      date: "2024-03-05",
      time: "3:45 PM",
      status: "cancelled",
      image: assets.doc4,
      hospital: "Skin Care Clinic",
      address: "321 Wellness Road",
    },
  ]);

  const [doctors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Cardiologist",
      image: assets.doc1,
      hospital: "City General Hospital",
      address: "123 Medical Center Drive",
      rating: 4.8,
      experience: "15 years",
      patients: 1200,
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Neurologist",
      image: assets.doc2,
      hospital: "St. Mary's Medical Center",
      address: "456 Health Avenue",
      rating: 4.9,
      experience: "12 years",
      patients: 980,
    },
    {
      id: 3,
      name: "Dr. Emily Brown",
      specialization: "Pediatrician",
      image: assets.doc3,
      hospital: "Children's Hospital",
      address: "789 Care Street",
      rating: 4.7,
      experience: "10 years",
      patients: 850,
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialization: "Dermatologist",
      image: assets.doc4,
      hospital: "Skin Care Clinic",
      address: "321 Wellness Road",
      rating: 4.6,
      experience: "8 years",
      patients: 720,
    },
  ]);

  const addAppointment = (appointment) => {
    setAppointments((prev) => [
      ...prev,
      { ...appointment, id: prev.length + 1 },
    ]);
  };

  const updateAppointment = (id, updatedData) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, ...updatedData } : appointment
      )
    );
  };

  const cancelAppointment = (id) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "cancelled" }
          : appointment
      )
    );
  };

  const rescheduleAppointment = (id, newDate, newTime) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, date: newDate, time: newTime }
          : appointment
      )
    );
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        doctors,
        addAppointment,
        updateAppointment,
        cancelAppointment,
        rescheduleAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error(
      "useAppointment must be used within an AppointmentProvider"
    );
  }
  return context;
};
