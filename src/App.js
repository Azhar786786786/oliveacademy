import logo from './logo.svg';
import './App.css';
import WildLife from './Components/WildLife';
import JsCode from './Components/JsCode';
import EventCondition from './Components/EventCondition';
import MultipleCondition from './Components/MultipleCondition';
import InputData from './Components/InputData';

import PropsInReact from './Components/PropsInReact';
import PropsMultipleDataInReact from './Components/PropsMultipleDataInReact';
import PropsObjectInReact from './Components/PropsObjectInReact';
import PropsMultipleObjectInReact from './Components/PropsMultipleObjectInReact';
import PropsArrayInReact from './Components/PropsArrayInReact';
import PassJsxToProps from './Components/PassJsxToProps';
import PropsWithDifferentTheme from './Components/PropsWithDifferentTheme';
import InputBoxData from './Components/InputBoxData';
import ControllerComponent from './Components/ControllerComponent';

function App() {

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
  
  let university=["DDU","Munad","ITM","IIT","JNU","AU"];
  

  return (
    <div className="App">

      <img src={logo} className="App-logo" alt="logo" />
      <h1>This is created by Azhar Hussain Khan</h1>

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

    <PropsArrayInReact uni={university} />

    <PassJsxToProps textcol="blue">
      <h1 style={{color:"yellow"}}>Student Card</h1>
      <h2>Student Name : Azhaan Hussain Khan</h2>
      <h2>Father Name : Azhar Hussain Khan</h2>
      <h2>Mother's Name : Shaista Khatoon</h2>
      <h2>Roll Number : H1</h2>
      <h2>School Name : Olive Academy</h2>
    </PassJsxToProps>
    <PassJsxToProps>
      <h1 style={{color:"yellow"}}>Student Card</h1>
      <h2>Student Name : Azhaan Hussain Khan</h2>
      <h2>Father Name : Azhar Hussain Khan</h2>
      <h2>Mother's Name : Shaista Khatoon</h2>
      <h2>Roll Number : H1</h2>
      <h2>School Name : Olive Academy</h2>
    </PassJsxToProps>
    <PassJsxToProps>
      <h1 style={{color:"yellow"}}>Student Card</h1>
      <h2>Student Name : Azhaan Hussain Khan</h2>
      <h2>Father Name : Azhar Hussain Khan</h2>
      <h2>Mother's Name : Shaista Khatoon</h2>
      <h2>Roll Number : H1</h2>
      <h2>School Name : Olive Academy</h2>
    </PassJsxToProps>

    <PropsWithDifferentTheme textcol="yellow" bg="gray" />
    <PropsWithDifferentTheme textcol="cyan" bg="gray" />
    <PropsWithDifferentTheme textcol="gray" bg="green" />

    <InputBoxData />
    <ControllerComponent />
    </div>
  );
}

export default App;
