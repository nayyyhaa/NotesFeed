import { Sidebar, AddEditNote, AllNotesFeed, DeletedFeed, ArchivesFeed, LabelFeed } from "components";
import { useModal } from "contexts/ModelContext";
import { useLocation } from "react-router-dom";
export const NotesFeed = () => {
  const { showModal } = useModal();
  const location = useLocation();

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
          {location.pathname === "/notesfeed" && <AllNotesFeed />}
          {location.pathname === "/labelfeed" && <LabelFeed />}
          {location.pathname === "/deletedfeed" && <DeletedFeed />}
          {location.pathname === "/archivesfeed" && <ArchivesFeed />}
        </section>
      </main>
      {showModal ? <AddEditNote /> : null}
    </div>
  );
};
