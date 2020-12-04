import { useEffect, useState } from 'react';
import './App.css';
import TodoPage from '../TodoPage';

const App = () => {

  const [todos, setTodos] = useState(
    [
      {
        description: 'Walk the dog.',
        active: true
      },
      {
        description: 'Swim in the ocean',
        active: true
      }
    ]
  );

  const [todo, setTodo] = useState('');


  // useEffect(() => {

  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = {
      description: e.target.value,
      active: true
    }

    setTodos([...todos, newTodo]);
    setTodo('');
  }

  const applyStrikethrough = () => {

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
