import { createContext, useReducer, useContext, useState } from "react";
import { noteReducer } from "reducers/noteReducer";
import notesData from "toolkit/data/notesData";
import { getLabels } from "toolkit/utils";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, dispatchNote] = useReducer(noteReducer, { allNotes: notesData ?? [], deletedNotes: [], archives: [] });

  const [labelList, setLabelList] = useState(() => getLabels(notes));
  return (
    <NoteContext.Provider value={{ notes, dispatchNote, labelList, setLabelList }}>{children}</NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
