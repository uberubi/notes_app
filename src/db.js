import Dixie from 'dexie'

const db = new Dixie('notes')
db.version(1).stores({notes: '++id'})

export default db
  // const db = new Dexie("Notes");

  // db.version(1).stores({
  //   notes: "title,text,date",
  // });

  // db.open().catch((err) => {
  //   console.log(err.stack || err);
  // });