import { formatDate } from "toolkit/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faTag, faArchive, faPen, faFolderOpen, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";

export const Note = ({ note }) => {
  const { setModalOpen } = useModal();
  const { notes, dispatchNote } = useNote();
  const { id, title, description, color, createdOn } = note;
  const allNotesIndex = notes.allNotes.findIndex((el) => el.id === note.id);
  const archiveNotesIndex = notes.archives.findIndex((el) => el.id === note.id);
  const deletedNotesIndex = notes.deletedNotes.findIndex((el) => el.id === note.id);
  return (
    <>
      <div className={`note ${color}-content w-80p`}>
        <h2>{title}</h2>
        <p className="m-v-1">{description}</p>
        <div className="note-footer row-flex">
          <small className="inherit-color">{formatDate(createdOn)}</small>
          <div className="note-actions w-15rm row-flex">
            <FontAwesomeIcon icon={faPen} onClick={() => setModalOpen(true, note)} title="Edit" />
            <FontAwesomeIcon icon={faTag} title="Label" />
            <FontAwesomeIcon
              icon={archiveNotesIndex > -1 ? faFolderOpen : faArchive}
              onClick={() => dispatchNote({ type: "ARCHIVE_NOTE", payload: note })}
              title={archiveNotesIndex > -1 ? "Unarchive" : "Archive"}
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => dispatchNote({ type: "DELETE_NOTE", payload: note })}
              title="Delete"
            />
            {deletedNotesIndex > -1 && (
              <FontAwesomeIcon
                icon={faRotateLeft}
                onClick={() => dispatchNote({ type: "RESTORE_NOTE", payload: note })}
                title="Restore"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
