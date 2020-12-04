const TodoList = ( {todos} ) => {
  return (
    <div>
        {todos.map((todo, idx) => (
          <div key={idx}>
            {todo.description}
            <button>X</button>
          </div>
        ))}
    </div>
  );
}

export default TodoList;