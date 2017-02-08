import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './stylesheet/css/main.css';

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.toggleMobilePreview = this.toggleMobilePreview.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      markdown: "This is Markdown\n=======\n\nSub-heading\n-----------\n \n### Another sub-heading\n \n### Some code \n\n```javascript\nvar syntaxHighlighting='awesome'; \nalert(syntaxHighlighting); \n```\n\nSimple text formatting: *italic*, **bold**, `inline-code`, ~~strikethrough~~ .\n\nUnordered List:\n\n  * apples\n  * oranges\n  * pears\n\nOrdered List:\n\n  1. apples\n  2. oranges\n  3. pears\n\n## How about Blockquotes?!\n\n > Right, got it \n > Maybe I'm dreaming but I don't think so \n > It doesn't matter....as long as I'm alive. \n > Cheers \n\n ## You forgot images \n\n ![Free Code Camp](https://cdn.rawgit.com/ayoisaiah/markdown-previewer/23afabd9/src/images/Free-Code-Camp.png)\n\n Oops....sorry \n\n [Ayo Isaiah](https://ayoisaiah.com)",
      mobilePreview: false
    }
  }

  handleChange(e) {
    const content = e.target.value;
    this.setState({
      markdown: content
    });
  }

  toggleMobilePreview() {
    this.setState({ mobilePreview: !this.state.mobilePreview });
  }


  render() {
    return (
      <App toggleMobilePreview={this.toggleMobilePreview} mobilePreview={this.state.mobilePreview} markdown={this.state.markdown} handleChange={this.handleChange} />
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
