import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import noNote from "toolkit/assets/no-data.svg";
import { Note } from "./Note";

export const LabelFeed = () => {
  const { notes } = useNote();
  const { setModalOpen } = useModal();
  return (
    <>
      <h2 className="title colored-text centered-text">Labeled Notes</h2>
      {notes.archives.length !== 0 ? (
        notes?.archives?.map((note) => <Note key={note.id} note={note} />)
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