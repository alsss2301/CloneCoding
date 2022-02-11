import React, { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState=("");
  const [toDos, setToDos] = useState=([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  return (
  <div>
    <h1>My To Do ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input 
        value={toDo} 
        onChange={onChange} 
        type="text" 
        placeholder='Write your to do...'
      />
      <button>Add To Do</button>
    </form>
    <hr />
    <ul>
    {toDos.map((item, index) =>(
    <li key={index}>{item}</li> 
    ))} 
    </ul>   
  </div> // map에서 return하는 값이 어떤 값이던지 그값은 새로운 배열이 된다.
  );
}

export default App;
