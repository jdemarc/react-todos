import './TodoList.css';

const TodoList = ( {todos, handleRemoveTodo, handleToggleComplete} ) => {
  return (
    <div>
        {todos.map((todo, idx) => (
          <div 
          className="todo-el"
          key={idx}>
            <button 
              className="complete"
              onClick={() => handleToggleComplete(todo.description)}>
            </button>

            <div className="todo-wrapper">
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'hsl(237, 14%, 26%)' : 'hsl(236, 33%, 92%)'
                }}
              >
                {todo.description}
              </span>
              <button 
                className="remove"
                onClick={() => handleRemoveTodo(todo.description)}>
                  X
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TodoList;