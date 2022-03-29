import { Color } from "./Color";

export const ColorPickerContainer = ({ noteForm, setNoteForm, setIsColorPicker }) => {
  const colors = ["blue", "red", "green", "yellow"];
  return (
    <div className="color-picker-container row-flex box-shd">
      {colors.map((el) => (
        <Color key={el} color={el} noteForm={noteForm} setNoteForm={setNoteForm} setIsColorPicker={setIsColorPicker} />
      ))}
    </div>
  );
};
