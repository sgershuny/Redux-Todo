import React from 'react';

class ToDo extends React.Component{
    render(){

        return(
            <div onClick = {() => this.props.remove(this.props.id)} >
                <h2>{this.props.todoItem}</h2>
            </div>
        )
    }
}

export default ToDo;