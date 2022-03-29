import { createContext, useState, useEffect, useContext } from "react";

const ModalContext = createContext();

const initialForm = {
  title: "",
  description: "",
  color: "blue",
  isArchived: false,
  isRemoved: false,
  createdOn: new Date(),
};
const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModelData] = useState({ note: initialForm, editmodeon: false });
  
  const setModalOpen = (editmodeon = false, note = initialForm) => {
    setShowModal(true);
    setModelData((prev) => ({ ...prev, note, editmodeon }));
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
