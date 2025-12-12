import React from 'react'

function JsCode() {
  const fullName = "Azhar Hussain Khan";
  let x = 5;
  let y = 7;
  let age = 35;
  function city() {
    alert('Gorakhpur');
  }
  function calc(a, b) {
    return a + b;
  }
  function calc(a, b, op) {
    if (op == "+") {
      return a + b;
    }
    else if (op == "-") {
      return a - b;
    }
    else if (op == "*") {
      return a * b;
    }
    else if (op == "/") {
      return a / b;
    }
  }

  function add(a,b){
    alert("Addition::"+(a+b));
  }

  const emp = {
    empName: "Azhar Hussain Khan",
    empSalary: 35000,
    empEmailId: "talkazhar786@hotmail.com"
  }

  function msg() {
    alert("Message display");
  }

  const colors = ["red", "green", "blue", "pink", "yellow"];

  const dogURL = "https://images.unsplash.com/photo-1530041539828-114de669390e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <>
      <h1 style={{ color: "chocolate" }}>JsCode Display</h1>
      <input type="text" name="" value={fullName}></input>
      <button onClick={msg}>Message Function Call</button>
      <button onClick={() => add(5, 4)}>calculator</button>
      <h2>My name is {fullName} and age is {age}</h2>
      <h3>x={x} <br /> y={y}<br />x+y={x + y}</h3>
      <h4>{city()}</h4>
      <h5>{calc(40, 60)}</h5>
      <h5>{emp.empSalary}</h5>
      <h6>{colors[1]}</h6>
      <img src={dogURL} width="300px" height="300px" alt="No Image" />
    </>
  )
}

export default JsCode