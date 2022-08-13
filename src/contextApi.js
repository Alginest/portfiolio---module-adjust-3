import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState(0);

  const openToggle = () => {
    setOpenMenu(!openMenu);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        openMenu,
        openToggle,
        setOpenMenu,
        isModalOpen,
        openModal,
        closeModal,
        setModalId,
        modalId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// global Context hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
