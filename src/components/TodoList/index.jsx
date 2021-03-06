import './TodoList.css';

const TodoList = ( {displayedTodos, handleRemoveTodo, handleToggleComplete} ) => {

  return (
    <div>
        {displayedTodos.map((todo, idx) => (
          <div 
          className="todo-el"
          key={idx}
          >

            <div
              className="btn-todo-wrapper"
              onClick={() => handleToggleComplete(todo.description)}
            >
              <button 
                className={todo.completed ? 'complete' : 'incomplete'}
              />

              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'hsl(237, 14%, 26%)' : 'hsl(236, 33%, 92%)'
                }}
              >
                {todo.description}
              </span>

            </div>
            
            <button
              className="remove-btn"
              onClick={() => handleRemoveTodo(todo.description)}
            />

          </div>
        ))}
    </div>
  );
}

export default TodoList;