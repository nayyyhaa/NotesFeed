import { formatDate } from "toolkit/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faTag, faArchive, faPen } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "contexts/ModelContext";
import { useNote } from "contexts/NoteContext";

export const Note = ({ note }) => {
  const { setModalOpen } = useModal();
  const { dispatchNote } = useNote();
  const { id, title, description, color, createdOn, isArchived, isRemoved } = note;
  return (
    <>
      <div className={`note ${color}-content w-80p`}>
        <h2>{title}</h2>
        <p className="m-v-1">{description}</p>
        <div className="note-footer row-flex">
          <small className="inherit-color">{formatDate(createdOn)}</small>
          <div className="note-actions w-15rm row-flex">
            <FontAwesomeIcon icon={faPen} onClick={() => setModalOpen(true, note)} />
            <FontAwesomeIcon icon={faTag} />
            <FontAwesomeIcon icon={faArchive} onClick={() => dispatchNote({ type: "ARCHIVE_NOTE", payload: { id } })} />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => dispatchNote({ type: "DELETE_NOTE", payload: { id } })} />
          </div>
        </div>
      </div>
    </>
  );
};
