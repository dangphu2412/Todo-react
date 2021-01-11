import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState(
    [
      {
        id: 1,
        text: 'Todo 1',
        isCompleted: true
      },
      {
        id: 2,
        text: 'Todo 2',
        isCompleted: false
      },
    ]
  );

  const addTodo = (todoList = {}) => {
    setTodo([...todo, todoList])
  }

  return (
    <div className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList todoList={todo} />
      <Footer />
    </div>
  );
}

export default App;
