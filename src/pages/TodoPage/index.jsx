import InputBar from '../../components/InputBar';
import TodoList from '../../components/TodoList';

import './TodoPage.css';

const TodoPage = ( {todo, setTodo, todos, handleSubmit, handleRemoveTodo, handleToggleComplete} ) => {
  return (
    <div className="tp-wrapper">
      <div className="header">
        <div> T O D O </div>
        <button id="mode-toggle"></button>
      </div>

      <InputBar
        todo={todo}
        setTodo={setTodo}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        handleRemoveTodo={handleRemoveTodo}
        handleToggleComplete={handleToggleComplete}
      />

    </div>
  );
}

export default TodoPage;