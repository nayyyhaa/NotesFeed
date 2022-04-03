import { createContext, useState, useEffect, useContext } from "react";

const ModalContext = createContext();

const initialForm = {
  title: "",
  description: "",
  color: "blue",
  createdOn: new Date(),
  label: "Work",
  isPinned: false,
};
const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModelData] = useState({ note: initialForm, editModeOn: false });

  const setModalOpen = (editModeOn = false, note = initialForm) => {
    setShowModal(true);
    setModelData((prev) => ({ ...prev, note, editModeOn }));
  };

  const setModalClose = () => setShowModal(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "visible";
  }, [showModal]);

  return (
    <ModalContext.Provider value={{ showModal, setModalOpen, setModalClose, modalData, setModelData }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
