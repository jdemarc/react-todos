import { useEffect, useState } from 'react';
import './App.css';
import TodoPage from '../TodoPage';

const App = () => {

  const [todos, setTodos] = useState([
    'Walk the dog.',
    'Swim in the ocean'
  ]);

  const [todo, setTodo] = useState('');


  // useEffect(() => {

  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = e.target.value;

    setTodos([...todos, newTodo]);
  }



  return (
    <div className="App">
        <TodoPage
          todo={todo}
          todos={todos}
          setTodo={setTodo}
          handleSubmit={handleSubmit}
        />
    </div>
  );
}

export default App;
