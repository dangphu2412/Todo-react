import React, { memo, useState } from 'react';

export const Header = memo(props => {
    const { addTodo, listLength } = props;

    const [text, setText] = useState('');
    const onAddTodo = (e) => {
        setText(text.trim());
        if (e.key === 'Enter') {
            if (text === '') {
                alert("You need to fill in before enter");
                return;
            }
            addTodo({
                id: listLength,
                text,
                isCompleted: false
            })

            setText('');
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