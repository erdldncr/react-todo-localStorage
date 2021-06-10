import React, { Component } from "react";

class TodoInput extends Component {
  state={
    title:''
  }
 
  handleSubmit=()=>{

    
  }
  render() {

    return (
      <div className="card card-body my-3">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" style={{ height: "25px" }} />
              </div>
            </div>
            <input
           value={this.state.title}
            onChange={(e)=>this.setState({title:e.target.value})}
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
            />
          </div>
          <button onClick={this.handleSubmit} type="button" class="btn btn-primary   btn-block mt-3 w-100">
            Add item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
