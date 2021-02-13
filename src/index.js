import React from 'react';
import ReactDom from 'react-dom';

// function Greeting() {
//   return (<div>
//             <h1>Hello World!, this is the first component</h1>
//         </div>);
// }

const Greeting = () => {
    return React.createElement('div', null, React.createElement('h1', {}, <h1>Hello World!</h1>));
}

ReactDom.render(<Greeting />, document.getElementById('root'));