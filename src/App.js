import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './index.css';
import Header from './note-app/Header';
import Search from './note-app/Search';
import Notelist from './note-app/Notelist';

const DApp = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'This is First Note and we Wrote it',
      date: '9/12/1998',
    },
    {
      id: 2,
      text: 'This is Charming Note and we are enjoying',
      date: '3/12/2004',
    },
    {
      id: 3,
      text: 'Today we write the note Application',
      date: '22/7/2022',
    },
  ]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-note-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-note-app-data', JSON.stringify(notes));
  }, [notes]);

  const togglefunc = () => {
    setDarkMode(!darkMode);
  };
  const remove = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    let newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode ? 'dapp' : 'app'}`}>
      <div className="app-center">
        <Header togglefunc={togglefunc} darkMode={darkMode} />
        <Search handleSearch={setSearchText} />
        <Notelist
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          remove={remove}
          addNote={addNote}
        />
      </div>
    </div>
  );
};

export default DApp;
