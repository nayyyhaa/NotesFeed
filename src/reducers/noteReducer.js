export const noteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        allNotes: [...state.allNotes, { ...action.payload, id: new Date().toLocaleString(), createdOn: new Date() }],
      };
    case "EDIT_NOTE": {
      const allNotesIndex = state.allNotes.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        allNotes: [
          ...state.allNotes.slice(0, allNotesIndex),
          { ...state.allNotes[allNotesIndex], ...action.payload },
          ...state.allNotes.slice(allNotesIndex + 1),
        ],
      };
    }
    case "ARCHIVE_NOTE": {
      const archiveNotesIndex = state.archives.findIndex((el) => el.id === action.payload.id);
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
    }
    case "DELETE_NOTE": {
      const deletedNotesIndex = state.deletedNotes.findIndex((el) => el.id === action.payload.id);
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
    }
    case "RESTORE_NOTE":
      return {
        ...state,
        allNotes: [...state.allNotes, action.payload],
        deletedNotes: state.deletedNotes.filter((el) => el.id !== action.payload.id),
      };
    case "CLEAR_ALL_NOTES":
      return {
        ...state,
        deletedNotes: [],
      };
    case "TOGGLE_NOTE_PIN": {
      const allNotesIndex = state.allNotes.findIndex((el) => el.id === action.payload.id);
      return {
        ...state,
        allNotes: [
          ...state.allNotes.slice(0, allNotesIndex),
          { ...state.allNotes[allNotesIndex], isPinned: !state.allNotes[allNotesIndex].isPinned },
          ...state.allNotes.slice(allNotesIndex + 1),
        ],
      };
    }
    default:
      return state;
  }
};
