import InputBar from '../../components/InputBar';
import TodoList from '../../components/TodoList';
import './TodoPage.css';

const TodoPage = ( {todo, setTodo, todos} ) => {
  return (
    <div className="tp-wrapper">
      <div className="header">
        <div> T O D O </div>
        <div>x</div>
      </div>

      <InputBar
        todo={todo}
        setTodo={setTodo}
      />
      <TodoList
        todos={todos}
      />

    </div>
  );
}

export default TodoPage;