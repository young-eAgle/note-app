import React from 'react';

const Header = ({ togglefunc, darkMode }) => {
  return (
    <div>
      <div className="nav-center">
        <div className="name">
          <h2>Note App</h2>
        </div>
        <div className="toggle-btn">
          <div
            className={`${darkMode ? 'move inner-toggle' : 'inner-toggle'}`}
            onClick={() => togglefunc()}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
