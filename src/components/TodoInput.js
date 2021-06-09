import React, { Component } from "react";

class TodoInput extends Component {
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
              type="text"
              className="form-control text-capitalize"
              placeholder="Add a todo item"
            />
          </div>
          <button type="button" class="btn btn-primary   btn-block mt-3 w-100">
            Add item
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
