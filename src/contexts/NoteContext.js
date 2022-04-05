import { createContext, useReducer, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { noteReducer } from "reducers/noteReducer";
import notesData from "toolkit/data/notesData";
import { addNoteService, updateNoteService } from "toolkit/utils";
import { useAuth } from "./AuthContext";
import { useToast } from "./ToastContext";
import { getLabels } from "toolkit/utils";

const NoteContext = createContext();
const initialLabels = ["School", "Work", "Personal"];

const NoteProvider = ({ children }) => {
  const [notes, dispatchNote] = useReducer(noteReducer, { allNotes: [], deletedNotes: [], archives: [] });

  const [labelList, setLabelList] = useState(() => [...initialLabels, ...getLabels(notes)]);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { dispatchToast } = useToast();
  const addNote = async (note) => {
    try {
      if (auth.isAuth) {
        const res = await addNoteService(auth.token, note);

        console.log(res, "n");
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        console.log(notes, "no");
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "success", msg: "Added Note Successfully!" },
        });
      } else navigate("/login");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in adding Note" },
      });
    }
  };
  const updateNote = async (note, id) => {
    try {
      if (auth.isAuth) {
        const res = await updateNoteService(auth.token, note, id);
        console.log(res, "nu");
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "success", msg: "Edited Note!" },
        });
      } else navigate("/login");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in updating Note" },
      });
    }
  };
  return (
    <NoteContext.Provider value={{ notes, dispatchNote, addNote, updateNote, labelList, setLabelList }}>
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
