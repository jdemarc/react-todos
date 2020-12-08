import { useEffect, useState } from 'react';
import './App.css';
import TodoPage from '../TodoPage';

const App = () => {

  const [todos, setTodos] = useState(
    [
      {
        description: 'Walk the dog.',
        active: true,
        completed: false
      },
      {
        description: 'Swim in the ocean.',
        active: true,
        completed: false
      },
      {
        description: 'Sail the seven seas.',
        active: true,
        completed: false
      },
      {
        description: 'Tip cows.',
        active: true,
        completed: false
      }
    ]
  );

  const [todo, setTodo] = useState('');

  const [displayedTodos, setDisplayedTodos] = useState([...todos]);

  useEffect(() => {
    setDisplayedTodos(todos);
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTodo = {
      description: e.target.value,
      active: true,
      completed: false
    }

    setTodos([...todos, newTodo]);

    // Clear input box.
    setTodo('');
  }

  const handleRemoveTodo = (desc) => {
    // Filter the list for all todos without the given description.
    const updatedTodos = todos.filter((todo) => todo.description !== desc);

    setTodos(updatedTodos);
  }

  const handleToggleComplete = (desc) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.description === desc) {
        todo.completed = !todo.completed
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  const handleClearComplete = () => {
    const incompleteTodos = todos.filter((todo) => todo.completed !== true);

    setTodos(incompleteTodos);
  }

  const handleCompletedFilter = () => {
    const completedTodos = todos.filter((todo) => todo.completed === true);

    setDisplayedTodos(completedTodos);
  }

  const handleActiveFilter = () => {
    const activeTodos = todos.filter((todo) => todo.completed === false);

    setDisplayedTodos(activeTodos);
  }

  const handleAllFilter = () => {
    setDisplayedTodos(todos);
  }

  return (
    <div className="App">
        <TodoPage
          todo={todo}
          todos={todos}
          displayedTodos={displayedTodos}
          setTodo={setTodo}
          handleSubmit={handleSubmit}
          handleRemoveTodo={handleRemoveTodo}
          handleToggleComplete={handleToggleComplete}
          handleClearComplete={handleClearComplete}
          handleCompletedFilter={handleCompletedFilter}
          handleActiveFilter={handleActiveFilter}
          handleAllFilter={handleAllFilter}
        />
    </div>
  );
}

export default App;
