import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Archives are present here.
 *  These are Privately accessible routes.
 * */

/**
 * This handler handles gets all archived notes in the db.
 * send GET Request at /api/archives
 * */

export const getAllArchivedNotesHandler = function (schema, request) {
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
 * This handler handles deletes note from archive.
 * send DELETE Request at /api/archives/:noteId
 * */

export const deleteFromArchivesHandler = function (schema, request) {
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
    const deletedNote = user.notes.archives.filter((note) => note._id === noteId)[0];
    user.notes.archives = user.notes.archives.filter((note) => note._id !== noteId);
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
 * This handler handles restoring the archived notes to user notes.
 * send POST Request at /api/archives/restore/:noteId
 * */

export const restoreFromArchivesHandler = function (schema, request) {
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
  const { noteId } = request.params;
  const restoredNote = user.notes.archives.filter((note) => note._id === noteId)[0];
  user.notes.archives = user.notes.archives.filter((note) => note._id !== noteId);
  user.notes.allNotes.push({ ...restoredNote });
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, user.notes);
};
