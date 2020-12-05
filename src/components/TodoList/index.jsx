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
                O
            </button>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
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
        ))}
    </div>
  );
}

export default TodoList;