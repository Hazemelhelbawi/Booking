import { createContext } from "react";
import { doctors, specialityData } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    specialityData,
    currencySymbol,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
