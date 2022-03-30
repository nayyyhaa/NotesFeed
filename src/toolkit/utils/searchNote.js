export const searchNote = (notes, searchText) =>
  searchText ? notes.filter((note) => note.title.includes(searchText) || note.description.includes(searchText)) : notes;
