import axiosIntance from "interceptors/axios.interceptor";

export const getNoteService = async () => {
  try {
    const response = await axiosIntance.get("/api/notes");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("getNote : Error in fetching notes details", e);
  }
};

export const addNoteService = async (note) => {
  try {
    const response = await axiosIntance.post("/api/notes", { note });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("addNote : Error in adding note", e);
  }
};

export const updateNoteService = async (note, id) => {
  try {
    const response = await axiosIntance.post(`/api/notes/${id}`, { note });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("updateNote : Error in updating note", e);
  }
};

export const deleteNoteService = async (id) => {
  try {
    const response = await axiosIntance.delete(`/api/notes/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteNote : Error in removing product from cart", e);
  }
};

export const archiveNoteService = async (note, id) => {
  try {
    const response = await axiosIntance.post(`/api/notes/archives/${id}`, { note });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("archiveNote : Error in archiving note", e);
  }
};

export const unArchiveNoteService = async (id) => {
  try {
    const response = await axiosIntance.post(`/api/archives/restore/${id}`, {});
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("unarchiveNote : Error in unarchiving note", e);
  }
};

export const deleteFromArchiveNoteService = async (id) => {
  try {
    const response = await axiosIntance.delete(`/api/archives/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteArchiveNote : Error in deleting note", e);
  }
};

export const permanentDeleteNoteService = async (id) => {
  try {
    const response = await axiosIntance.delete(`/api/deletednote/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteNote : Error in deleting note", e);
  }
};

export const deleteAllNoteService = async () => {
  try {
    const response = await axiosIntance.delete(`/api/deletednote/deleteall`, {});
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteNote : Error in deleting note", e);
  }
};

export const restoreFromDeletedNoteService = async (id) => {
  try {
    const response = await axiosIntance.post(`/api/deletednote/restore/${id}`, {});
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("restoreDeletedNote : Error in restoring note", e);
  }
};
