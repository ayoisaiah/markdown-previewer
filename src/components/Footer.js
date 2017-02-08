import React from 'react';

const Footer = (props) => {

  return (
    <footer className="footer">

      <div className="status-bar">
        <span className="large-screen-only">Paragraphs: {props.markdown.split('\n').filter(Boolean).length},</span>
        <span className="large-screen-only">Characters: {props.markdown.length},</span>
        <span className="large-screen-only">Characters (without spaces): {props.markdown.replace(/\s+/gi, '').length},</span>
        <span>Words: {props.markdown.trim().replace(/\s+/gi, ' ').split(' ').filter(Boolean).length}</span>
        <div className="source"><a href="https://github.com/ayoisaiah/markdown-previewer">View on GitHub</a></div>
      </div>

    </footer>
  );
}

export default Footer;
