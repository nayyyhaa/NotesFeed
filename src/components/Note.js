import { formatDate } from "toolkit/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArchive, faPen, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import { useToast } from "contexts/ToastContext";
import { useLocation } from "react-router-dom";
import { BsPin, BsPinFill } from "react-icons/bs";

export const Note = ({ note }) => {
  const { setModalOpen } = useModal();
  const {
    notes,
    dispatchNote,
    deleteNote,
    archiveNote,
    unArchiveNote,
    deleteArchivedNote,
    permanentDeleteNote,
    restoreNote,
  } = useNote();
  const { dispatchToast } = useToast();
  const { _id, title, description, color, label, createdOn } = note;
  const location = useLocation();
  const archiveNotesIndex = notes.archives.findIndex((el) => el._id === note._id);
  const deletedNotesIndex = notes.deletedNotes.findIndex((el) => el._id === note._id);
  const isSmallWidth = location.pathname === "/archives-feed" || location.pathname === "/deleted-feed";
  const isPenVisible = location.pathname === "/notesfeed" || location.pathname === "/label-feed";
  const deleteHandler = () => {
    switch (location.pathname) {
      case "/archives-feed":
        deleteArchivedNote(_id);
        break;
      case "/deleted-feed":
        permanentDeleteNote(_id);
        break;
      default:
        deleteNote(_id);
    }
  };
  return (
    <div className={`note ${color}-content p-2 w-60p`}>
      <div className="note-header row-flex">
        <h2 className="w-90p">{title}</h2>
        {location.pathname === "/notesfeed" && (
          <span
            title={note.isPinned ? "Unpin" : "Pin"}
            onClick={() => {
              dispatchNote({ type: "TOGGLE_NOTE_PIN", payload: note });
              dispatchToast({
                type: "SHOW_TOAST",
                payload: { state: "success", msg: `Note ${note.isPinned ? "unpinned" : "pinned"}` },
              });
            }}
          >
            {note.isPinned ? <BsPinFill /> : <BsPin />}
          </span>
        )}
      </div>
      <p className="m-v-1 m-b-3">{description}</p>
      <small className={`${color}-bg label-text p-05`}>{label}</small>
      <div className="note-footer row-flex">
        <small className="inherit-color">{formatDate(createdOn)}</small>
        <div className={`note-actions w-${isSmallWidth ? "5" : "10"}rm row-flex`}>
          {isPenVisible && <FontAwesomeIcon icon={faPen} onClick={() => setModalOpen(true, note)} title="Edit" />}
          {location.pathname !== "/deleted-feed" && (
            <FontAwesomeIcon
              icon={archiveNotesIndex > -1 ? faRotateLeft : faArchive}
              onClick={() => (archiveNotesIndex > -1 ? unArchiveNote(_id) : archiveNote(note, _id))}
              title={archiveNotesIndex > -1 ? "Unarchive" : "Archive"}
            />
          )}
          <FontAwesomeIcon icon={faTrashCan} onClick={deleteHandler} title="Delete" />
          {deletedNotesIndex > -1 && (
            <FontAwesomeIcon icon={faRotateLeft} onClick={() => restoreNote(_id)} title="Restore" />
          )}
        </div>
      </div>
    </div>
  );
};
