import React from 'react';
import PropTypes from 'prop-types';

TodoClearCompleted.propTypes = {
    clearCompleted: PropTypes.func.isRequired
};

function TodoClearCompleted({clearCompleted}) {
    return (
        <div>
            <button className="button" onClick={clearCompleted}>Clear completed</button>
        </div>
    );
}

export default TodoClearCompleted;