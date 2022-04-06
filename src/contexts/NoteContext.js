import { createContext, useReducer, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { noteReducer } from "reducers/noteReducer";
import notesData from "toolkit/data/notesData";
import {
  addNoteService,
  archiveNoteService,
  deleteAllNoteService,
  deleteFromArchiveNoteService,
  deleteNoteService,
  permanentDeleteNoteService,
  restoreFromDeletedNoteService,
  unArchiveNoteService,
  updateNoteService,
} from "toolkit/utils";
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
        const res = await addNoteService(note);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
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
        const res = await updateNoteService(note, id);
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
  const archiveNote = async (note, id) => {
    try {
      if (auth.isAuth) {
        const res = await archiveNoteService(note, id);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "success", msg: "Note Archived!" },
        });
      } else navigate("/login");
    } catch (err) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in archiving Note" },
      });
    }
  };
  const deleteNote = async (id) => {
    try {
      if (auth.isAuth) {
        const res = await deleteNoteService(id);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Note deleted" },
        });
      } else navigate("/login");
    } catch (e) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in deleting Note" },
      });
    }
  };
  const deleteArchivedNote = async (id) => {
    try {
      if (auth.isAuth) {
        const res = await deleteFromArchiveNoteService(id);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Note deleted" },
        });
      } else navigate("/login");
    } catch (e) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in deleting Note" },
      });
    }
  };
  const unArchiveNote = async (id) => {
    try {
      if (auth.isAuth) {
        const res = await unArchiveNoteService(id);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Note unarchived" },
        });
      } else navigate("/login");
    } catch (e) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in unarchiving Note" },
      });
    }
  };
  const permanentDeleteNote = async (id) => {
    try {
      if (auth.isAuth) {
        const res = await permanentDeleteNoteService(id);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Note deleted" },
        });
      } else navigate("/login");
    } catch (e) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in deleting Note" },
      });
    }
  };
  const deleteAllNotes = async () => {
    try {
      if (auth.isAuth) {
        const res = await deleteAllNoteService();
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "All Notes deleted" },
        });
      } else navigate("/login");
    } catch (e) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in deleting Note" },
      });
    }
  };
  const restoreNote = async (id) => {
    try {
      if (auth.isAuth) {
        const res = await restoreFromDeletedNoteService(id);
        dispatchNote({ type: "SET_ALL_NOTES", payload: res });
        dispatchToast({
          type: "SHOW_TOAST",
          payload: { state: "default", msg: "Note restored" },
        });
      } else navigate("/login");
    } catch (e) {
      dispatchToast({
        type: "SHOW_TOAST",
        payload: { state: "error", msg: "Error in restoring Note" },
      });
    }
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        dispatchNote,
        addNote,
        updateNote,
        deleteNote,
        archiveNote,
        unArchiveNote,
        deleteArchivedNote,
        permanentDeleteNote,
        deleteAllNotes,
        restoreNote,
        labelList,
        setLabelList,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { useNote, NoteProvider };
