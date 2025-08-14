"use client";
import { createContext, useContext, useState } from "react";
import { Mock_Jobs } from "@/data/artisan_data/Mock_Jobs";

const ArtisanContext = createContext();
export const useArtisanContext = () => useContext(ArtisanContext);

export default function ArtisanProvider({ children }) {
  const [showBalance, setShowBalance] = useState(false);
  const [selectedJob, setSelectedJob] = useState(Mock_Jobs[0]);
  const [quoteItems, setQuoteItems] = useState([
    { id: 1, name: "", cost: "" },
    { id: 2, name: "", cost: "" },
  ]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const toggleBalance = () => setShowBalance((prev) => !prev);
  const handleJobSelect = (job) => setSelectedJob(job);

  const addNewItem = () =>
    setQuoteItems((prev) => [...prev, { id: Date.now(), name: "", cost: "" }]);

  const removeItem = (id) =>
    setQuoteItems((prev) => (prev.length > 1 ? prev.filter((i) => i.id !== id) : prev));

  const updateItem = (id, field, value) =>
    setQuoteItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );

  const totalBudget = quoteItems.reduce(
    (total, item) => total + (parseFloat(item.cost) || 0),
    0
  );

  const submitQuote = () => {
    setModalOpen(true);
  };
  const [isEditing, setIsEditing] = useState(false);
    const [addressData, setAddressData] = useState({
      country: 'Nigeria',
      state: 'Lagos',
      city: 'Lagos',
      streetAddress: '10 Kings Avenue, Lagos Igando/Egan, Nigeria',
      zipCode: '100223'
    });
  
    const handleInputChange = (field, value) => {
      setAddressData(prev => ({
        ...prev,
        [field]: value
      }));
    };
  
    const handleSave = () => {
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
    };
  return (
    <ArtisanContext.Provider
      value={{
        isEditing,
        setIsEditing,
        addressData,
        setAddressData,
        handleInputChange,
        handleSave,
        handleCancel,
        showBalance,
        toggleBalance,
        selectedJob,
        handleJobSelect,
        Mock_Jobs,
        quoteItems,
        addNewItem,
        removeItem,
        updateItem,
        additionalInfo,
        setAdditionalInfo,
        totalBudget,
        modalOpen,
        setModalOpen,
        submitQuote,
      }}
    >
      {children}
    </ArtisanContext.Provider>
  );
}
