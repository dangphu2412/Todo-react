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

  const [edittingId, setEdittingId] = useState('');

  const addTodo = (todoList = {}) => {
    setTodo([...todo, todoList])
  }

  const getEdittingId = (id = null) => {
    setEdittingId(id);
  }

  const changeCheckedTodoItem = (id) => {
    setTodo([...todo.map(item => {
      return item.id === id ? {
        ...item,
        isCompleted: true
      } : item;
    })])
  }

  const removeItem = (id) => {
    setTodo([...todo.filter(item => {
      return item.id !== id;
    })])
  }

  const onEdit = (todoState = {}, index = -1) => {
    if (index > 0) {
      todo.splice(index, 1, todoState);
    }
  }

  return (
    <div className="todoapp">
      <Header addTodo={addTodo} />
      <TodoList
        todoList={todo}
        getEdittingId={getEdittingId}
        edittingId={edittingId}
        changeCheckedTodoItem={changeCheckedTodoItem}
        onEdit={onEdit}
        removeItem={removeItem}
      />
      <Footer />
    </div>
  );
}

export default App;
