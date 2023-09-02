import React from 'react';
import PropTypes from 'prop-types';

TodoItemsRemaining.propTypes = {
    remaining: PropTypes.func.isRequired,
};

function TodoItemsRemaining({remaining}) {
    return (
        <div>
            <span>{remaining()} items remaining</span>
        </div>
    );
}

export default TodoItemsRemaining;