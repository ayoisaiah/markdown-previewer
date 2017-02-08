import React from 'react';
let Markdown = require('react-remarkable');

const Body = (props) => {
  return (
    <section className="app-body">

      <section className={"edit-area " + (props.mobilePreview ? "hidden" : "show")}>
        <textarea className="editor" id="editor" draggable="false" value={props.markdown} onChange={props.handleChange}></textarea>
      </section>

      <section className={"preview-area " + (props.mobilePreview ? "show" : "hidden")}>
        <div className="preview markdown-body">
          <Markdown source={props.markdown} options={{breaks: true}}></Markdown>
        </div>
      </section>

    </section>
  );
}

Body.propTypes = {
  markdown: React.PropTypes.string.isRequired
};

Body.defaultProps = {
  markdown: ''
};

export default Body;
