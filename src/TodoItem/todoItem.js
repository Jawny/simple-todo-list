import React from 'react';
import './style.css';

class TodoItem extends React.Component {
    render(){

        const {todo} = this.props;
        return(
        <div className={'todoItem' + (todo.comlpeted ? ' completed' : '')} onClick={this.toggleTodo}>{todo.text}</div>
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);
    }
}

export default TodoItem;