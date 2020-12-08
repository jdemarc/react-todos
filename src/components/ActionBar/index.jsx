import './ActionBar.css';

const ActionBar = ( {handleClearComplete, handleAllFilter, handleActiveFilter, handleCompletedFilter} ) => {
  
  return (
    <div className="action-bar">
      <div>
        999 items left
      </div>

      <div>
        <div
          className="actionable"
          onClick={() => handleAllFilter()}
        >
          All
        </div>
        <div
          className="actionable"
          onClick={() => handleActiveFilter()}
        >
          Active
        </div>
        <div
          className="actionable"
          onClick={() => handleCompletedFilter()}
        >
          Completed
        </div>
      </div>

      <div
        className="actionable"
        onClick={() => handleClearComplete()}
        >
          Clear Completed
        </div>
    </div>
  );
}

export default ActionBar;