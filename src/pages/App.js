import './App.css';
import InputBar from '../components/InputBar';
import TodoList from '../components/TodoList';

const App = () => {
  return (
    <div className="App">
      TODO (:

      <InputBar />
      <TodoList />
    </div>
  );
}

export default App;
