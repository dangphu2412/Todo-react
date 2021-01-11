import React, { memo, useState } from 'react';

export const Header = memo(props => {
    const { addTodo } = props;

    const [text, setText] = useState('');
    const onAddTodo = (e) => {
        if (e.key === 'Enter' && text.trim()) {
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })

            setText('')
        }
    }
    return (
        <header className="header">
            <h1>Todos</h1>
            <input
                className="new-todo"
                value={text}
                onChange={(e => setText(e.target.value))}
                onKeyPress={(e) => onAddTodo(e)}
            />
        </header>
    );
})