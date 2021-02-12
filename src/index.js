import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return <h1>Hello World!, this is the first component</h1>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));