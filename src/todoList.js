import React, { Component } from 'react';


class TodoList extends Component {
  render() {

    const items = this.props.myTaks.map((elem, i) =>{
        return(
            <li>
            <span className="id">{i +1 }</span>
            <span className="title"> {elem}</span>
            </li>

    
        )
    });

    return (
      <div>
       {items}
      </div>
    );
  }
}

export default TodoList;
