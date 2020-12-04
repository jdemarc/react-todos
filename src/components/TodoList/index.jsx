const TodoList = ( {todos, onRemoveTodo} ) => {
  return (
    <div>
        {todos.map((todo, idx) => (
          <div key={idx}>
            {todo.description}
            <button onClick={() => onRemoveTodo(todo.description)}>X</button>
          </div>
        ))}
    </div>
  );
}

export default TodoList;