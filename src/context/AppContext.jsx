import { createContext, useState } from "react";
import { doctors, specialityData } from "../assets/assets";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [currencySymbol, setCurrencySymbol] = useState("$"); // default: LE

  const currencyOptions = [
    { symbol: "LE", label: "Egyptian Pound" },
    { symbol: "$", label: "US Dollar" },
    // Add more as needed
  ];

  const exchangeRate = 50; // 1 USD = 50 EGP

  const getConvertedFee = (usdFee) => {
    return currencySymbol === "LE" ? usdFee * exchangeRate : usdFee;
  };

  const value = {
    doctors,
    specialityData,
    currencySymbol,
    setCurrencySymbol,
    currencyOptions,
    getConvertedFee,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
