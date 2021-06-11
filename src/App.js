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
   if(this.state.item){
    this.setState({
      items:[...this.state.items,{title:this.state.item,id:this.state.id}],
      item:'',
      id:uuid(),
      editItem:false
    })
   }
  }
  handleDelete=(id)=>{
    
    this.setState({
      items:this.state.items.filter(item=>item.id!==id)
    })
  }
handleEdit=(id)=>{
  const onEditItem=this.state.items.find(item=>item.id===id).title
  console.log(onEditItem)
  this.setState({
    editItem:true,
    item:onEditItem,
    items:this.state.items.filter(item=>item.id!==id)
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
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
            />
            <TodoList
            items={this.state.items}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
