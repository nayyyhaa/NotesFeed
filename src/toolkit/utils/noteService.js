import axios from "axios";

export const getNoteService = async (authToken) => {
  try {
    const response = await axios.get("/api/notes", {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("getNote : Error in fetching notes details", e);
  }
};

export const addNoteService = async (authToken, note) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("addNote : Error in adding note", e);
  }
};

export const updateNoteService = async (authToken, note, id) => {
  try {
    const response = await axios.post(
      `/api/notes/${id}`,
      { note },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("updateNote : Error in updating note", e);
  }
};

export const deleteNoteService = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/notes/${id}`, {
      headers: { authorization: authToken },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteNote : Error in removing product from cart", e);
  }
};

export const archiveNoteService = async (authToken, note, id) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${id}`,
      { note },
      {
        headers: { authorization: authToken },
      }
    );
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("archiveNote : Error in archiving note", e);
  }
};

export const unArchiveNoteService = async (authToken, id) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${id}`,
      {},
      {
        headers: { authorization: authToken },
      }
    );

    console.log(response, "res un");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("unarchiveNote : Error in unarchiving note", e);
  }
};

export const deleteFromArchiveNoteService = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/archives/${id}`, {
      headers: { authorization: authToken },
    });
    console.log(response, "res un");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteArchiveNote : Error in deleting note", e);
  }
};

export const permanentDeleteNoteService = async (authToken, id) => {
  try {
    const response = await axios.delete(`/api/deletednote/${id}`, {
      headers: { authorization: authToken },
    });

    console.log(response, "res un");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteNote : Error in deleting note", e);
  }
};

export const deleteAllNoteService = async (authToken) => {
  try {
    const response = await axios.delete(
      `/api/deletednote/deleteall`,
      {
        headers: { authorization: authToken },
      }, {}
    );

    console.log(response, "res un");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("deleteNote : Error in deleting note", e);
  }
};

export const restoreFromDeletedNoteService = async (authToken, id) => {
  try {
    const response = await axios.post(
      `/api/deletednote/restore/${id}`,
      {},
      {
        headers: { authorization: authToken },
      }
    );

    console.log(response, "res un");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log("restoreDeletedNote : Error in restoring note", e);
  }
};
