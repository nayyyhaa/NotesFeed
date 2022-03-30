import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import noNote from "toolkit/assets/no-data.svg";
import { Note } from "./Note";

export const AllNotesFeed = () => {
  const { notes } = useNote();
  const { setModalOpen } = useModal();
  return (
    <>
      {notes?.allNotes?.filter((note) => note.isPinned).length > 0 && (
        <>
          <h3 className="title centered-text">Pinned</h3>
          {notes?.allNotes
            ?.filter((note) => note.isPinned)
            .map((note) => (
              <Note key={note.id} note={note} />
            ))}
          <h3 className="title centered-text">Others</h3>
        </>
      )}

      {notes.allNotes.length !== 0 ? (
        notes?.allNotes?.filter((note) => !note.isPinned).map((note) => <Note key={note.id} note={note} />)
      ) : (
        <div className="grid-ctr m-v-5">
          <img className="w-30p no-note" src={noNote} alt="no note" />
          <p className="m-t-3">No note found</p>
          <p>
            <strong>
              Start{" "}
              <span className="colored-text cursor" onClick={() => setModalOpen(false)}>
                Note-ing!
              </span>
            </strong>
          </p>
        </div>
      )}
    </>
  );
};
