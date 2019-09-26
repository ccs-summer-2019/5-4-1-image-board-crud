import React, {Component} from 'react';
import ImageBoard from './../containers/ImageBoard';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class App extends Component {

  render() {
    console.log(this.addTodo);
    return (
      <div className="App">
        <ImageBoard />
      </div>
    )
  }
}

export default App;
