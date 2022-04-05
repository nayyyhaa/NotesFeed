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
    console.log("addToCart : Error in adding note", e);
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
    console.log("addToCart : Error in updating note", e);
  }
};

