import './ActionBar.css';

const ActionBar = ( {todos} ) => {
  
  return (
    <div className="action-bar">
      <div>
        {todos.length} items left
      </div>

      <div>
        All Active Completed
      </div>

      <div>
        Clear Complete
      </div>
    </div>
  );
}

export default ActionBar;