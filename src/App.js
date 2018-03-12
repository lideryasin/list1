import React, { Component } from 'react';
import TodoList from './todoList';


class App extends Component {
  render() {

    const myTaks = [
      "Yapılacak ilk iş",
      "Erken uyu",
      "interstellar izle",
      "erken uyu",
    ];

    return (
      <div>
      <TodoList  myTaks={myTaks}/>
      </div>
    );
  }
}

export default App;
