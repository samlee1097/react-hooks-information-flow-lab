import React from 'react';

function Header({onDarkModeClick, isOn}) {
    return (
        <>
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isOn ? "Dark" : "Light"} Mode
        </button>
      </header>
        </>
    );
}

export default Header;
