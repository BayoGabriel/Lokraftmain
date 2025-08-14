"use client";
import { createContext, useContext } from "react";

const CustomerContext = createContext();
export const useCustomerContext = () => useContext(CustomerContext);

export default function CustomerProvider({ children }) {
 

  return (
    <CustomerContext.Provider
      value={{
       
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}
