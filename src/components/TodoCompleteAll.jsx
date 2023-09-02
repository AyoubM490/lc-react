import React from 'react';
import PropTypes from 'prop-types';

TodoCompleteAll.propTypes = {
    completeAllTodos: PropTypes.func.isRequired,
};

function TodoCompleteAll({completeAllTodos}) {
    return (
        <div>
            <div className="button" onClick={completeAllTodos}>Check All</div>
        </div>
    );
}

export default TodoCompleteAll;