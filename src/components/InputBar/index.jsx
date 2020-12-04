import './InputBar.css';

const InputBar = ( { todo, setTodo, handleSubmit } ) => {
  
  return (
    <div className="input-field">
        <input type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
        />
    </div>
  );
}

export default InputBar;