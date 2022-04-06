import { useNote } from "contexts/NoteContext";
import noNote from "toolkit/assets/no-data.svg";
import { Note } from "./Note";

export const ArchivesFeed = () => {
  const { notes } = useNote();
  return (
    <section className="notefeed-section m-v-3">
      <h2 className="title colored-text centered-text">Archived Notes</h2>
      {notes.archives.length !== 0 ? (
        notes?.archives?.map((note) => <Note key={note._id} note={note} />)
      ) : (
        <div className="grid-ctr m-v-5">
          <img className="w-30p no-note" src={noNote} alt="no note" />
          <p className="m-t-3">No note in archives.</p>
        </div>
      )}
    </section>
  );
};
