import React, { memo, useState } from 'react';

export const Todo = memo(props => {
    const {
        todoItem, setEdittingId, edittingId,
        changeCheckedTodoItem, removeItem, onEdit,
        index
    } = props;

    const [text, setText] = useState(todoItem.text);
    const isEditting = edittingId === todoItem.id;

    const onChangeClicked = (e) => {
        changeCheckedTodoItem(todoItem.id)
    }
    const onChangeEdit = (e) => {
        setText(e.target.value)
    }
    const editTodo = () => {
        onEdit({ ...todoItem, text }, index)
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            editTodo()
            setEdittingId()
        }
    }
    const onRemoveItem = (e) => {
        removeItem(todoItem.id)
    }
    return (
        <li className={`${isEditting ? 'editting' : ''}${todoItem.isCompleted ? 'completed' : ''}`}>
            {
                !isEditting ?
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={todoItem.isCompleted}
                            onChange={onChangeClicked}
                        />
                        <label
                            onDoubleClick={e => setEdittingId(todoItem.id)}
                            onClick={onChangeClicked}
                        >
                            {todoItem.text}
                        </label>
                        <button className="destroy" onClick={onRemoveItem}></button>
                    </div>
                    :
                    <input
                        className="edit"
                        type="text"
                        value={text}
                        onChange={onChangeEdit}
                        onBlur={editTodo}
                        onKeyPress={onKeyPress}
                    />
            }

        </li>
    );
});