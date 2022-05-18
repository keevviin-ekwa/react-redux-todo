import logo from './logo.svg';
import './App.css';
import TodoList, {TodoListStore} from "./component/TodoList";

function App() {
  return (
    <div>
     <TodoListStore/>
    </div>
  );
}

export default App;
