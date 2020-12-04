import { useState } from 'react';
import './InputBar.css';

const InputBar = ( { setTodo } ) => {
  
  return (
    <div className="input-field">
        <input type="text"
          onChange={(e) => setTodo(e.target.value)}
          // onKeyPress={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
        />
    </div>
  );
}

export default InputBar;