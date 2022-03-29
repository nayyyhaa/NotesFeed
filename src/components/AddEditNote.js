import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPalette, faTag } from "@fortawesome/free-solid-svg-icons";
import { useNote } from "contexts/NoteContext";
import { useModal } from "contexts/ModelContext";

export const AddEditNote = () => {
  const { modalData, showModal, setModalClose } = useModal();
  const [checkFormValidity, setFormValid] = useState(false);
  const { editmodeon, note } = modalData;
  const { dispatchNote } = useNote();
  const [noteForm, setNoteForm] = useState(note);
  const formRef = useRef();
  const formHandler = () => {
    dispatchNote({ type: editmodeon ? "EDIT_NOTE" : "ADD_NOTE", payload: noteForm });
    setModalClose();
  };

  const validateForm = (e) => {
    e.preventDefault();
    setFormValid(true);
    if (formRef.current.checkValidity()) {
      formHandler();
    }
  };

  return (
    <>
      <div className={`modal-wrapper modal-wrapper-example grid-ctr ${showModal ? "show-modal" : ""}`}>
        <form
          noValidate
          ref={formRef}
          className={`modal grid-ctr p-t-5 ${checkFormValidity ? "form-validated" : ""}`}
          onSubmit={(e) => validateForm(e)}
        >
          <button
            type="button"
            className="card-icon-btn icon-btn rd-bdr close-btn modal-close-btn example-modal-close-btn"
          >
            <FontAwesomeIcon icon={faTimes} onClick={setModalClose} />
          </button>
          <div className="note-field">
            <input
              type="text"
              id="title"
              className="note-input title h3 p-h-1 m-auto"
              placeholder="Title"
              value={noteForm.title}
              required
              onChange={(e) => setNoteForm((prev) => ({ ...prev, title: e.target.value }))}
            />
            <small className="form-validation-msg error-msg red-text p-l-1">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
            </small>
          </div>
          <div className="note-field">
            <textarea
              type="text"
              id="description"
              className="note-input m-auto"
              value={noteForm.description}
              required
              placeholder="Type your note description here..."
              onChange={(e) => setNoteForm((prev) => ({ ...prev, description: e.target.value }))}
            />
            <small className="form-validation-msg error-msg red-text p-l-1">
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
            </small>
          </div>
          <div className="actions w-15rm row-flex flex-end p-1">
            <FontAwesomeIcon icon={faPalette} />
            <FontAwesomeIcon icon={faTag} />
          </div>
          <button type="submit" className="btn primary-btn example-modal-close-btn m-1 w-50p">
            {editmodeon ? "Save" : "Add"} Note
          </button>
        </form>
      </div>
    </>
  );
};
