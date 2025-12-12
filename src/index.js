import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WildLife from './Components/WildLife';
import JsCode from './Components/JsCode';
import EventCondition from './Components/EventCondition';
import MultipleCondition from './Components/MultipleCondition';
import InputData from './Components/InputData';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <WildLife />
    <JsCode />
    <EventCondition />
    <MultipleCondition />
    <InputData />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
