import { Server, Model, RestSerializer } from "miragejs";
import {
  deleteFromArchivesHandler,
  getAllArchivedNotesHandler,
  restoreFromArchivesHandler,
} from "./backend/controllers/ArchiveController";
import { loginHandler, signupHandler } from "./backend/controllers/AuthController";
import {
  archiveNoteHandler,
  createNoteHandler,
  deleteNoteHandler,
  getAllNotesHandler,
  updateNoteHandler,
} from "./backend/controllers/NotesController";
import {
  deleteAllNoteHandler,
  restoreDeletedNoteHandler,
  deleteFromDeletedNoteHandler,
} from "./backend/controllers/DeleteController";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    // TODO: Use Relationships to have named relational Data
    models: {
      user: Model,
      notes: Model,
    },

    seeds(server) {
      server.logging = false;
      users.forEach((item) =>
        server.create("user", {
          ...item,
          notes: { allNotes: [], archives: [], deletedNotes: [] },
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // notes routes (private)
      this.get("/notes", getAllNotesHandler.bind(this));
      this.post("/notes", createNoteHandler.bind(this));
      this.post("/notes/:noteId", updateNoteHandler.bind(this));
      this.delete("/notes/:noteId", deleteNoteHandler.bind(this));
      this.post("/notes/archives/:noteId", archiveNoteHandler.bind(this));

      // archive routes (private)
      this.get("/archives", getAllArchivedNotesHandler.bind(this));
      this.post("/archives/restore/:noteId", restoreFromArchivesHandler.bind(this));
      this.delete("/archives/:noteId", deleteFromArchivesHandler.bind(this));

      // delete routes (private)
      this.delete("/deletednote/deleteall", deleteAllNoteHandler.bind(this));
      this.delete("/deletednote/:noteId", deleteFromDeletedNoteHandler.bind(this));
      this.post("/deletednote/restore/:noteId", restoreDeletedNoteHandler.bind(this));
    },
  });
  return server;
}
