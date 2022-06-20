import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPalette, faTag } from "@fortawesome/free-solid-svg-icons";
import { useNote } from "contexts/NoteContext";
import { useModal } from "contexts/ModelContext";
import { ColorPickerContainer } from "./ColorPickerContainer";

export const AddEditNote = () => {
  const { modalData, showModal, setModalClose } = useModal();
  const [checkFormValidity, setFormValid] = useState(false);
  const [isColorPickerOpen, setIsColorPicker] = useState(false);
  const { editModeOn, note } = modalData;
  const { labelList, addNote, updateNote } = useNote();
  const [noteForm, setNoteForm] = useState(note);
  const formRef = useRef();

  const formHandler = () => {
    editModeOn ? updateNote(noteForm, noteForm._id) : addNote({ ...noteForm, createdOn: new Date() });
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
            className="note-input title h3 p-h-1"
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
            className="note-input"
            value={noteForm.description}
            required
            placeholder="Type your note description here..."
            onChange={(e) => setNoteForm((prev) => ({ ...prev, description: e.target.value }))}
          />
          <small className="form-validation-msg error-msg red-text p-l-1">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <div className="note-actions w-20rm row-flex flex-end p-1">
          <FontAwesomeIcon
            icon={faPalette}
            onClick={() => setIsColorPicker((prev) => !prev)}
            className={`${noteForm.color}-text`}
          />
          <label htmlFor="tag-selector" className="note-tagfield w-60p">
            <span className="cursor p-05">
              <FontAwesomeIcon icon={faTag} />
            </span>
            <select
              className="tag-selector"
              name="tag-selector"
              value={noteForm.label}
              onChange={(e) => setNoteForm((prev) => ({ ...prev, label: e.target.value }))}
            >
              {labelList?.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          {isColorPickerOpen && (
            <ColorPickerContainer noteForm={noteForm} setNoteForm={setNoteForm} setIsColorPicker={setIsColorPicker} />
          )}
        </div>
        <button type="submit" className="btn primary-btn example-modal-close-btn m-1 w-50p">
          {editModeOn ? "Save" : "Add"} Note
        </button>
      </form>
    </div>
  );
};
