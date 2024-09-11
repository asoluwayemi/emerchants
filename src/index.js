import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReceipApp from './ReceipApp';
// import { ListProvider } from './context/ListContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReceipApp />
  
  </React.StrictMode>
  // <>
  // <h1> Greetings from the planet Mars</h1>
  // <p> We have successfully bypassed atom </p>
  // <ul>
  //   <li>Breakfast</li>
  //   <li>Lunch</li>
  //   <li>Dinner</li>
  // </ul>
  // <table border="1">
  //   <thead>

  //   <tr>
  //     <th>Name</th>
  //     <th>Age</th>
  //   </tr>
  //   </thead>
  //   <tbody>
  //   <tr>
  //     <td>Abayomi</td>
  //     <td>16</td>
  //   </tr>
  //   <tr>
  //     <td>Omolara</td>
  //     <td>14</td>
  //   </tr>
  //   </tbody>
  // </table>
  // </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
