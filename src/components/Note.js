import { formatDate } from "toolkit/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArchive, faPen, faFolderOpen, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";
import { useToast } from "contexts/ToastContext";
import { useLocation } from "react-router-dom";
import { BsPin, BsPinFill } from "react-icons/bs";

export const Note = ({ note }) => {
  const { setModalOpen } = useModal();
  const { notes, dispatchNote } = useNote();
  const { dispatchToast } = useToast();
  const { _id, title, description, color, label, createdOn } = note;
  const location = useLocation();
  const archiveNotesIndex = notes.archives.findIndex((el) => el._id === note._id);
  const deletedNotesIndex = notes.deletedNotes.findIndex((el) => el._id === note._id);
  const isPenVisible = location.pathname === "/notesfeed" || location.pathname === "/labelfeed";

  return (
    <div className={`note ${color}-content p-2 w-60p`}>
      <div className="note-header row-flex">
        <h2 className="w-95p">{title}</h2>
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
        <div className={`note-actions w-${location.pathname === "/archivesfeed" ? "5" : "10"}rm row-flex`}>
          {isPenVisible && <FontAwesomeIcon icon={faPen} onClick={() => setModalOpen(true, note)} title="Edit" />}
          <FontAwesomeIcon
            icon={archiveNotesIndex > -1 ? faRotateLeft : faArchive}
            onClick={() => {
              dispatchNote({ type: "ARCHIVE_NOTE", payload: note });
              dispatchToast({
                type: "SHOW_TOAST",
                payload: { state: "success", msg: `Note ${archiveNotesIndex > -1 ? "unarchived" : "archived"}` },
              });
            }}
            title={archiveNotesIndex > -1 ? "Unarchive" : "Archive"}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={() => {
              dispatchNote({ type: "DELETE_NOTE", payload: note });
              dispatchToast({
                type: "SHOW_TOAST",
                payload: { state: "success", msg: `Note deleted` },
              });
            }}
            title="Delete"
          />
          {deletedNotesIndex > -1 && (
            <FontAwesomeIcon
              icon={faRotateLeft}
              onClick={() => {
                dispatchNote({ type: "RESTORE_NOTE", payload: note });
                dispatchToast({
                  type: "SHOW_TOAST",
                  payload: { state: "success", msg: `Note restored` },
                });
              }}
              title="Restore"
            />
          )}
        </div>
      </div>
    </div>
  );
};
