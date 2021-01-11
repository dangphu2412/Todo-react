import React, { memo } from 'react';
import { Todo } from '../Todo';

export const TodoList = memo(props => {
    const { todoList } = props;

    return (
        <section className="main">
            <input className="toggle-all" />
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {
                    todoList.map(todoItem => <Todo key={`${todoItem.id}`} {...{ todoItem }} />)
                }
            </ul>
        </section>
    );
})