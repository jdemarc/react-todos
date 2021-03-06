import './InputBar.css';

const InputBar = ( { todo, setTodo, handleSubmit } ) => {
  
  return (
    <div className="input-box">
        <button className="btn">

        </button>
        <input type="text"
          placeholder="Create a new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
        />
    </div>
  );
}

export default InputBar;