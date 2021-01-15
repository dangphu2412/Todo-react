import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { TodoList } from '../../components/TodoList';
import { useState } from 'react';

export const TodoPage = () => {
    const [todo, setTodo] = useState(
        [
            {
                id: 0,
                text: 'Todo 1',
                isCompleted: true
            },
            {
                id: 1,
                text: 'Todo 2',
                isCompleted: false
            },
        ]
    );

    const [edittingId, setEdittingId] = useState('');

    const addTodo = (todoList = {}) => {
        setTodo([...todo, todoList])
    }

    const changeCheckedTodoItem = (id = null) => {
        setTodo(todo.map(item => {
            return item.id === id ? {
                ...item,
                isCompleted: true
            } : item;
        }))
    }

    const removeItem = (id = null) => {
        setTodo(todo.filter(item => {
            return item.id !== id;
        }))
    }

    const onEdit = (todoState = {}, index = -1) => {
        if (index > 0) {
            todo.splice(index, 1, todoState);
        }
    }

    return (
        <div className="todoapp">
            <Header listLength={todo.length} addTodo={addTodo} />
            <TodoList
                todoList={todo}
                setEdittingId={setEdittingId}
                edittingId={edittingId}
                changeCheckedTodoItem={changeCheckedTodoItem}
                onEdit={onEdit}
                removeItem={removeItem}
            />
            <Footer />
        </div>
    );
}