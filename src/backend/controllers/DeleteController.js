import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Deleted note are present here.
 *  These are Privately accessible routes.
 * */

/**
 * This handler handles deletes note from deleted folder.
 * send DELETE Request at /api/deletednote/:noteId
 * */

export const deleteFromDeletedNoteHandler = function (schema, request) {
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
  const noteId = request.params.noteId;
  user.notes.deletedNotes = user.notes.deletedNotes.filter((note) => note._id !== noteId);
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, user.notes);
};
/**
 * This handler handles deletes note from deleted folder.
 * send DELETE Request at /api/deletednote/deleteall
 * */

export const deleteAllNoteHandler = function (schema, request) {
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
  user.notes.deletedNotes = [];
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, user.notes);
};

/**
 *
 * This handler handles restoring the deleted notes to user notes.
 * send POST Request at /api/deletednote/restore/:noteId
 * */

export const restoreDeletedNoteHandler = function (schema, request) {
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
  const restoredNote = user.notes.deletedNotes.find((note) => note._id === noteId);
  user.notes.deletedNotes = user.notes.deletedNotes.filter((note) => note._id !== noteId);
  user.notes.allNotes.push({ ...restoredNote });
  this.db.users.update({ _id: user._id }, user);
  return new Response(200, {}, user.notes);
};
