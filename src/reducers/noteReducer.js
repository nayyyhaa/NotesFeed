export const noteReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_NOTES":
      return JSON.parse(JSON.stringify(action.payload));
    case "ADD_NOTE":
      return {
        ...state,
        allNotes: [...state.allNotes, { ...action.payload }],
      };
    case "EDIT_NOTE":
      return {
        ...state,
        allNotes: state.allNotes.map((note) =>
          note._id === action.payload._id ? { ...note, ...action.payload } : note
        ),
      };
    case "ARCHIVE_NOTE": {
      const archiveNotesIndex = state.archives.findIndex((el) => el._id === action.payload._id);
      return archiveNotesIndex === -1
        ? {
            ...state,
            allNotes: state.allNotes.filter((el) => el._id !== action.payload._id),
            deletedNotes: state.deletedNotes.filter((el) => el._id !== action.payload._id),
            archives: [...state.archives, action.payload],
          }
        : {
            ...state,
            allNotes: [...state.allNotes, action.payload],
            archives: state.archives.filter((el) => el._id !== action.payload._id),
          };
    }
    case "DELETE_NOTE": {
      const deletedNotesIndex = state.deletedNotes.findIndex((el) => el._id === action.payload._id);
      return deletedNotesIndex === -1
        ? {
            ...state,
            allNotes: state.allNotes.filter((el) => el._id !== action.payload._id),
            archives: state.archives.filter((el) => el._id !== action.payload._id),
            deletedNotes: [...state.deletedNotes, action.payload],
          }
        : {
            ...state,
            deletedNotes: state.deletedNotes.filter((el) => el._id !== action.payload._id),
          };
    }
    case "RESTORE_NOTE":
      return {
        ...state,
        allNotes: [...state.allNotes, action.payload],
        deletedNotes: state.deletedNotes.filter((el) => el._id !== action.payload._id),
      };
    case "CLEAR_ALL_NOTES":
      return {
        ...state,
        deletedNotes: [],
      };
    case "TOGGLE_NOTE_PIN":
      return {
        ...state,
        allNotes: state.allNotes.map((note) =>
          note._id === action.payload._id ? { ...note, isPinned: !note.isPinned } : note
        ),
      };
    default:
      return state;
  }
};
