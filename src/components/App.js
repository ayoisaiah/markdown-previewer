import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App = (props) => {
  return (
    <main id="main">

      <Header toggleMobilePreview={props.toggleMobilePreview} mobilePreview={props.mobilePreview} />

      <Body mobilePreview={props.mobilePreview} markdown={props.markdown} handleChange={props.handleChange} />

      <Footer markdown={props.markdown} />

    </main>
  );
}

export default App;
