import React from 'react';

import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [input, setInput] = useState('');
  const CharacterLimit = 400;
  const handleChange = (e) => {
    e.preventDefault();
    if (CharacterLimit - e.target.value.length >= 0) {
      setInput(e.target.value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      handleAddNote(input);
    }
    setInput('');
  };
  return (
    <div className="">
      <div className="new-note note ">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Type to add a note..."
          value={input}
          onChange={handleChange}
          className="text-area"
        ></textarea>
        <div className="footer">
          <small>{CharacterLimit - input.length} Remaining</small>
          <button onClick={handleSave} className="save">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
