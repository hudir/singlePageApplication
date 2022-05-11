import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let App = () =><h1>My first react app</h1> // JSX component first letter uppercase
const namesInHTML = [
  <li className='li1'>Bob</li>,
  <li>Bob</li>,
  <li>Bob</li>,
  <li>Bob</li>
];

const content = <ul>{namesInHTML}</ul>


root.render(content);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
