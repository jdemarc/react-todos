import { useState } from 'react';
import './InputBar.css';

const InputBar = () => {
  const [todo, setTodo] = useState('');
  
  return (
    <div className="input-field">
        <input type="text"
          // onChange={(e) => setMessage(e.target.value)}
          // onKeyPress={(e) => e.key === 'Enter' ? handleSubmit(e) : null}
        />
    </div>
  );
}

export default InputBar;