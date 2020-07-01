import Dixie from "dexie";

const db = new Dixie("notes");
db.version(1).stores({ notes: "++id, title, text" });

export default db;
