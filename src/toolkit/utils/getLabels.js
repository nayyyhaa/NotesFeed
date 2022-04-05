export const getLabels = (notes) => {
  const noteKeys = Object.keys(notes);
  const allLabels = [...noteKeys.map((noteKey) => notes[noteKey])[0]];
  return [...new Set(allLabels.map((note) => note.label))];
};
