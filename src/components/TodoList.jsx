import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoClearCompleted from "./TodoClearCompleted";
import TodoCompleteAll from "./TodoCompleteAll";
import TodoFilters from "./TodoFilters";

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    todosFiltered: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
    markAsEditing: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    remaining: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    completeAllTodos: PropTypes.func.isRequired,
};



function TodoList({todos, todosFiltered, completeTodo, markAsEditing, updateTodo, cancelEdit, deleteTodo, remaining, clearCompleted, completeAllTodos}) {
    const [filter, setFilter] = useState('all');
    console.log(todosFiltered(filter))

    return (
        <>
            <ul className="todo-list">
                {todosFiltered(filter).map((todo, index) =>
                    <li key={todo.id} className="todo-item-container">
                        <div className="todo-item">
                            <input type="checkbox" onChange={() => completeTodo(todo.id)}
                                   checked={todo.isComplete}/>

                            {!todo.isEditing ? (
                                    <span
                                        onDoubleClick={() => markAsEditing(todo.id)}
                                        className={`todo-item-label ${todo.isComplete ? 'line-through' : ''}`}>
                                        {todo.title}
                                        </span>
                                ) :
                                <input
                                    type="text"
                                    onBlur={(event) => updateTodo(event, todo.id)}
                                    onKeyDown={event => {
                                        if (event.key === "Enter") {
                                            updateTodo(event, todo.id);
                                        } else if (event.key === 'Escape') {
                                            cancelEdit(event, todo.id);
                                        }
                                    }
                                    }
                                    className="todo-item-input"
                                    defaultValue={todo.title}
                                    autoFocus/>}
                        </div>
                        <button onClick={() => deleteTodo(todo.id)} className="x-button">
                            <svg
                                className="x-button-icon"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </li>
                )
                }
            </ul>

            <div className="check-all-container">
                <TodoCompleteAll completeAllTodos={completeAllTodos}/>

                <TodoItemsRemaining remaining={remaining}/>
            </div>

            <div className="other-buttons-container">
                <TodoFilters todosFiltered={todosFiltered} filter={filter} setFilter={setFilter}/>
                <div>
                    <TodoClearCompleted clearCompleted={clearCompleted}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;