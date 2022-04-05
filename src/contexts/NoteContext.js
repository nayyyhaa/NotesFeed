import { createContext, useReducer, useContext, useState } from "react";
import { noteReducer } from "reducers/noteReducer";
import { getLabels } from "toolkit/utils";

const NoteContext = createContext();
const initialLabels = ["School", "Work", "Personal"];

const NoteProvider = ({ children }) => {
  const [notes, dispatchNote] = useReducer(noteReducer, { allNotes: [], deletedNotes: [], archives: [] });

  const [labelList, setLabelList] = useState(() => [...initialLabels, ...getLabels(notes)]);
  return (
    <NoteContext.Provider value={{ notes, dispatchNote, labelList, setLabelList }}>{children}</NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
