import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h3>Markdown Previewer</h3>

      <button className="small-screen-only" onClick={props.toggleMobilePreview}>{props.mobilePreview ? " Switch To Editor Mode" : " Switch To Preview Mode" }</button>

    </header>
  );
}

export default Header;
