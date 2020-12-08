import ActionBar from '../../components/ActionBar';
import InputBar from '../../components/InputBar';
import TodoList from '../../components/TodoList';

import './TodoPage.css';

const TodoPage = ( props ) => {

  // Rename props ?

  return (
    <div className="tp-wrapper">
      <div className="header">
        <div> T O D O </div>
        <button id="mode-toggle"></button>
      </div>

      <InputBar
        todo= {props.todo}
        setTodo={props.setTodo}
        handleSubmit={props.handleSubmit}
      />
      <TodoList
        todos={props.todos}
        displayedTodos={props.displayedTodos}
        handleRemoveTodo={props.handleRemoveTodo}
        handleToggleComplete={props.handleToggleComplete}
      />
      <ActionBar
        count={props.count}
        handleClearComplete={props.handleClearComplete}
        handleAllFilter={props.handleAllFilter}
        handleActiveFilter={props.handleActiveFilter}
        handleCompletedFilter={props.handleCompletedFilter}
      />

    </div>
  );
}

export default TodoPage;