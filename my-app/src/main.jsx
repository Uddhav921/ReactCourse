import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import Adi from './index.jsx';

// Create a button element using React.createElement
const btn = React.createElement(
  "button",
  { onClick: () => alert("Clicked!") },
  "Click Me"
);

function Uddhav(){
    return(
        <h1>uddhav here from Here </h1>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {btn} {/* Wrap btn in curly braces so JSX can render it */}
    <App/>
    <Adi/>
    <Uddhav/>
  </StrictMode>
);
