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
import PropsInReact from './Components/PropsInReact';
import PropsMultipleDataInReact from './Components/PropsMultipleDataInReact';
import PropsObjectInReact from './Components/PropsObjectInReact';
import PropsMultipleObjectInReact from './Components/PropsMultipleObjectInReact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const empName = "Azhar Hussain Khan";
const empAge = 35;
const addr = "037, chilmapur, Rustampur dhala, near jama masjid, shivepuri new colony 273016, U.P. (India).";

let employee = {
  name: "Shaista khatoon",
  age: 31,
  salary: 33000,
  emailId: "talkshaista786@gmail.com"
}

let employee1 = {
  name: "Salma khatoon",
  age: 33,
  salary: 35000,
  emailId: "talksalma786@gmail.com"
}
let employee2 = {
  name: "Shaista khatoon",
  age: 31,
  salary: 33000,
  emailId: "talkshaista786@gmail.com"
}
let employee3 = {
  name: "Nazma khatoon",
  age: 35,
  salary: 39000,
  emailId: "talknazma786@gmail.com"
}
let employee4 = {
  name: "Azhar Hussain Khan",
  age: 38,
  salary: 46000,
  emailId: "talkazhar786@hotmail.com"
}

root.render(
  <React.StrictMode>
    <App />
    <WildLife />
    <JsCode />
    <EventCondition />
    <MultipleCondition />
    <InputData />
    <PropsInReact empName="Azhar Hussain Khan" />
    <PropsMultipleDataInReact empName={empName} empAge={empAge} addr={addr} />
    <PropsObjectInReact user={employee} />

    <PropsMultipleObjectInReact user={employee1} />
    <PropsMultipleObjectInReact user={employee2} />
    <PropsMultipleObjectInReact user={employee3} />
    <PropsMultipleObjectInReact user={employee4} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
