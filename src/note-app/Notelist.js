import React from 'react';

import Note from './Notes.js';
import AddNote from './AddNote';

const Notelist = ({ notes, remove, addNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            text={note.text}
            date={note.date}
            removeNote={remove}
          />
        );
      })}

      <AddNote handleAddNote={addNote} />
    </div>
  );
};

export default Notelist;
