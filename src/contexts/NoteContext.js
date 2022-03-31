import { createContext, useReducer, useContext } from "react";
import { noteReducer } from "reducers/noteReducer";
import notesData from "toolkit/data/notesData";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, dispatchNote] = useReducer(noteReducer, { allNotes: notesData ?? [], deletedNotes: [], archives: [] });

  return <NoteContext.Provider value={{ notes, dispatchNote }}>{children}</NoteContext.Provider>;
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
