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
        {location.pathname === "/notesfeed" && <AllNotesFeed />}
        {location.pathname === "/labelfeed" && <LabelFeed />}
        {location.pathname === "/deletedfeed" && <DeletedFeed />}
        {location.pathname === "/archivesfeed" && <ArchivesFeed />}
      </main>
      {showModal ? <AddEditNote /> : null}
    </div>
  );
};
