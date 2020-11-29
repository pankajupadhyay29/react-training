import React from 'react';
import './App.css';
import { Student, Test } from './ts_test';

function App() {
  const obj = new Test();
  obj.setValue(10);

  const student = new Student('FName', 'LName', 20);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={Test.varTest}>var Test</button>
        <button onClick={Test.letTest}>let Test</button>
        <button onClick={obj.getValue} >this without arrow Test</button>
        <button onClick={() => obj.getValue()} >this with arrow Test</button>
        <button onClick={student.addDefaultMarks}>Add Marks</button>
        <button onClick={student.printMarks.bind(student)}>Print Marks</button>
        <button onClick={() => console.log(student.marksArray())}>Print Marks Array</button>
      </header>
    </div>
  );
}

export default App;
