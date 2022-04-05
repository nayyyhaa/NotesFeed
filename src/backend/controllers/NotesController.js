import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to Notes are present here.
 *  These are Privately accessible routes.
 * */

/**
 * This handler handles gets all notes in the db.
 * send GET Request at /api/notes
 * */

export const getAllNotesHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  if (!user) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  return new Response(200, {}, user.notes);
};

/**
 * This handler handles creating a new note
 * send POST Request at /api/notes
 * body contains {note}
 * */

export const createNoteHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { note } = JSON.parse(request.requestBody);
    if (!note.label) {
      user.notes.allNotes.push({ ...note, _id: uuid(), label: "" });
    } else {
      user.notes.allNotes.push({ ...note, _id: uuid() });
    }
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, user.notes);
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles creating a new note
 * send DELETE Request at /api/notes/:noteId
 * */

export const deleteNoteHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const noteId = request.params.noteId;
    const deletedNote = user.notes.allNotes.filter((note) => note._id === noteId)[0];
    user.notes.allNotes = user.notes.allNotes.filter((note) => note._id !== noteId);
    user.notes.deletedNotes.push({ ...deletedNote });
    this.db.users.update({ _id: user._id }, user);
    return new Response(200, {}, user.notes);
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating a note
 * send POST Request at /api/notes/:noteId
 * body contains {note}
 * */

export const updateNoteHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { note } = JSON.parse(request.requestBody);
    const { noteId } = request.params;
    const noteIndex = user.notes.allNotes.findIndex((note) => note._id === noteId);
    user.notes.allNotes[noteIndex] = { ...user.notes.allNotes[noteIndex], ...note };
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, user.notes);
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles archiving a note
 * send POST Request at /api/notes/archive/:noteId
 * body contains {note}
 * */

export const archiveNoteHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { noteId } = request.params;
    const archivedNote = user.notes.allNotes.filter((note) => note._id === noteId)[0];
    user.notes.allNotes = user.notes.allNotes.filter((note) => note._id !== noteId);
    user.notes.archives.push({ ...archivedNote });
    this.db.users.update({ _id: user._id }, user);
    return new Response(201, {}, user.notes);
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};


