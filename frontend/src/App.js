import logo from './logo.svg';
import './App.css';
import Todo from './components/Todos';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <Todo />
    </div>
  );
}

export default App;
