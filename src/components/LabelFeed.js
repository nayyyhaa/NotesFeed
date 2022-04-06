import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import noNote from "toolkit/assets/no-data.svg";
import { Note } from "./Note";

export const LabelFeed = () => {
  const { notes, labelList } = useNote();
  const { setModalOpen } = useModal();
  let noLabel = true;

  return (
    <section className="notefeed-section m-v-3">
      <h2 className="title colored-text centered-text">Labeled Notes</h2>
      <div className="row-flex m-v-1">
        {labelList?.map((label) => (
          <small key={label} className={`primary-bg label-text p-h-1 m-v-1`}>
            {label}
          </small>
        ))}
      </div>
      {labelList?.map((label) => {
        return (
          <div key={label}>
            <h2 className="w-60p m-auto h3 p-v-2">{notes?.allNotes.some((note) => note.label === label) && label}</h2>
            {notes.allNotes.length !== 0
              ? notes?.allNotes?.map((note) => note.label === label && <Note key={note._id} note={note} />)
              : noLabel && (
                  <div className="grid-ctr m-v-5">
                    <img className="w-30p no-note" src={noNote} alt="no note" />
                    <p className="m-t-3">No note found</p>
                    <p>
                      <strong>
                        Start{" "}
                        <span className="colored-text cursor" onClick={() => setModalOpen(false)}>
                          Note-ing!
                          {(noLabel = false)}
                        </span>
                      </strong>
                    </p>
                  </div>
                )}
          </div>
        );
      })}
    </section>
  );
};
