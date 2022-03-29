import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Color = ({ color, noteForm, setNoteForm, setIsColorPicker }) => {
  const setColor = () => {
    setNoteForm((prev) => ({ ...prev, color }));
    setIsColorPicker(false);
  };
  return (
    <div className={`color cursor grid-ctr ${color}-content`} onClick={setColor}>
      {noteForm.color === color && <FontAwesomeIcon icon={faCheck} />}
    </div>
  );
};
