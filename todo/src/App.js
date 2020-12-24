import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import {addItem, complete} from './actions/actions';

import ToDo from './components/ToDo';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todo: ''
    }
  }




  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1> This is my Redux To-Do List </h1>
          {this.props.todos.map(item => {
            return <ToDo 
              key = {item.id} 
              todoItem = {item.value} 
              remove = {this.props.complete} 
              id = {item.id}
            />
          })}
          {//<form onSubmit ={() => this.props.addItem(this.state.todo)}>}
         }<input type = 'text'  placeholder = "Next ToDo Item" onChange ={(e) => {this.setState({todo: e.target.value})}}/>
          <input type = 'submit' onClick ={() => this.props.addItem(this.state.todo,this.props.next_id)}/>
          {// </form>
        }</header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    todos: state.todos,
    next_id: state.next_id
  }
}

export default connect(mapStateToProps,{addItem, complete})(App);
