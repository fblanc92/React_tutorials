import React from 'react';
import ReactDom from 'react-dom';

// function Greeting() {
//   return <h1>Hello World!, this is the first component</h1>;
// }

const Greeting = () => {
    return React.createElement('h1', null, 'Hello world!');
}

ReactDom.render(<Greeting />, document.getElementById('root'));
