"use client";
import { Mock_Jobs } from "@/data/artisan_data/Mock_Jobs";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export default function GlobalProvider({ children }) {
    const [selectedJob, setSelectedJob] = useState(Mock_Jobs[0]);
    const handleJobSelect = (job) => setSelectedJob(job);
 

  return (
    <GlobalContext.Provider
      value={{
        selectedJob,
        handleJobSelect,
        Mock_Jobs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
