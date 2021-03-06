import React, { Component } from "react";

class TodoInput extends Component {

 

 
  render() {
      const {item,handleChange,handleSubmit,editItem}=this.props
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
            value={item}
            onChange={handleChange}
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
            />
          </div>
          <button onClick={handleSubmit} type="submit" class={
            !editItem? `btn btn-primary   btn-block mt-3 w-100`:`btn btn-success  btn-block mt-3 w-100`
          }>
           {!editItem?'Add':'Edit'} item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
