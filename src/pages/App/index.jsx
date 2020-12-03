import { useEffect, useState } from 'react';
import './App.css';
import TodoPage from '../TodoPage';

const App = () => {

  const [todos, setTodos] = useState([
    'Walk the dog.',
    'Swim in the ocean'
  ]);


  // useEffect(() => {

  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    // setTodos;
  }



  return (
    <div className="App">
        <TodoPage
          todos={todos}
          setTodos={setTodos}
          handleSubmit={handleSubmit}
        />
    </div>
  );
}

export default App;
