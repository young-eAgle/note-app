import React from 'react';

const Notes = ({ id, text, date, removeNote }) => {
  return (
    <div>
      <div className="note" key={id}>
        <p>{text}</p>
        <div className="footer">
          <p>{date}</p>
          <button onClick={() => removeNote(id)} className="remove ">
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
