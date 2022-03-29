import { Sidebar, Note, AddEditNote } from "components";
import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import noNote from "toolkit/assets/no-data.svg";

export const NotesFeed = () => {
  const { notes } = useNote();
  const { showModal, setModalOpen } = useModal();

  return (
    <div className="notefeed-layout row-flex no-wrap flex-start">
      <Sidebar />
      <main className="notefeed-content p-h-5">
        <div className="notefeed-content-header row-flex p-2 m-t-3">
          <label className="field note-searchfield w-80p" htmlFor="search-text">
            <span className="search-icon cursor p-h-1">
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="search"
              className="input search-nav reset-ip p-05"
              placeholder="Search here"
              id="search-text"
            />
          </label>
          <button className="btn primary-btn">Search</button>
          <i className="fa fa-sliders" aria-hidden="true"></i>
        </div>
        <section className="notefeed-section m-v-3">
          {notes.length !== 0 ? (
            notes?.map((note) => <Note key={note.id} note={note} />)
          ) : (
            <div class="grid-ctr m-v-5">
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
        </section>
      </main>
      {showModal ? <AddEditNote /> : null}
    </div>
  );
};
