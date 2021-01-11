import React, { memo } from 'react';

export const Todo = memo(props => {
    const { todoItem } = props;
    return (
        <li>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todoItem.isCompleted} />
                <label>{todoItem.text}</label>
                <button className="destroy"></button>
            </div>

        </li>
    );
});