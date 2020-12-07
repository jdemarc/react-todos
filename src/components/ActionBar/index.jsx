import './ActionBar.css';

const ActionBar = ( {handleClearComplete} ) => {
  
  return (
    <div className="action-bar">
      <div>
        999 items left
      </div>

      <div>
        All Active Completed
      </div>

      <div
        className="clear-completed"
        onClick={() => handleClearComplete()}
        >
          Clear Completed
        </div>
    </div>
  );
}

export default ActionBar;