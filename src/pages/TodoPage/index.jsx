import InputBar from '../../components/InputBar';
import TodoList from '../../components/TodoList';
import './TodoPage.css';

const TodoPage = () => {
  return (
    <div className="tp-wrapper">
      <div className="header">
        <div> TODO </div>
        <div> (: </div>
      </div>
      
      <InputBar />
      <TodoList />
    </div>
  );
}

export default TodoPage;