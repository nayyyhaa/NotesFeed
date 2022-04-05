import { useNote } from "contexts/NoteContext";
import { useToast } from "contexts/ToastContext";
import noNote from "toolkit/assets/no-data.svg";
import { Note } from "./Note";

export const DeletedFeed = () => {
  const { notes, dispatchNote } = useNote();
  const { dispatchToast } = useToast();
  return (
    <section className="notefeed-section m-v-3">
      <div className="row-flex">
        <h2 className="title colored-text centered-text">Deleted Notes</h2>
        {notes.deletedNotes.length !== 0 && (
          <button
            className="btn primary-btn"
            onClick={() => {
              dispatchNote({ type: "CLEAR_ALL_NOTES" });
              dispatchToast({
                type: "SHOW_TOAST",
                payload: { state: "success", msg: `All notes deleted` },
              });
            }}
          >
            Clear all notes
          </button>
        )}
      </div>
      {notes.deletedNotes.length !== 0 ? (
        notes?.deletedNotes?.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <div className="grid-ctr m-v-5">
          <img className="w-30p no-note" src={noNote} alt="no note" />
          <p className="m-t-3">No note deleted.</p>
        </div>
      )}
    </section>
  );
};
