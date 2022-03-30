export const noteReducer = (state, action) => {
  const allNotesIndex = state.allNotes.findIndex((el) => el.id === action.payload.id);
  const archiveNotesIndex = state.archives.findIndex((el) => el.id === action.payload.id);
  const deletedNotesIndex = state.deletedNotes.findIndex((el) => el.id === action.payload.id);
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        allNotes: [...state.allNotes, { ...action.payload, id: new Date().toLocaleString(), createdOn: new Date() }],
      };
    case "EDIT_NOTE":
      return {
        ...state,
        allNotes: [
          ...state.allNotes.slice(0, allNotesIndex),
          { ...state.allNotes[allNotesIndex], ...action.payload },
          ...state.allNotes.slice(allNotesIndex + 1),
        ],
      };
    case "ARCHIVE_NOTE":
      return archiveNotesIndex === -1
        ? {
            ...state,
            allNotes: state.allNotes.filter((el) => el.id !== action.payload.id),
            deletedNotes: state.deletedNotes.filter((el) => el.id !== action.payload.id),
            archives: [...state.archives, action.payload],
          }
        : {
            ...state,
            allNotes: [...state.allNotes, action.payload],
            archives: state.archives.filter((el) => el.id !== action.payload.id),
          };
    case "DELETE_NOTE":
      return deletedNotesIndex === -1
        ? {
            ...state,
            allNotes: state.allNotes.filter((el) => el.id !== action.payload.id),
            archives: state.archives.filter((el) => el.id !== action.payload.id),
            deletedNotes: [...state.deletedNotes, action.payload],
          }
        : {
            ...state,
            deletedNotes: state.deletedNotes.filter((el) => el.id !== action.payload.id),
          };
    case "RESTORE_NOTE":
      return {
        ...state,
        allNotes: [...state.allNotes, action.payload],
        deletedNotes: state.deletedNotes.filter((el) => el.id !== action.payload.id),
      };
    default:
      return state;
  }
};
