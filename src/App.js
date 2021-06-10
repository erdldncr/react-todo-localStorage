import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
class App extends Component {
  
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange=(e)=>{
    this.setState({item:e.target.value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
   this.setState({
     items:[...this.state.items,{title:this.state.item,id:this.state.id}],
     item:'',
     id:uuid(),
     editItem:false
   })
  }
  handleDelete=(id)=>{
    
    this.setState({
      todoList:this.state.todoList.filter(item=>item.id!==id)
    })
  }

  clearList=()=>{
    this.setState({items:[]})
  }
  render() {
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center"> todo input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <TodoList
            items={this.state.items}
            clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
