import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    title : null
  }

  componentDidMount(){
    fetch('http://localhost:3002/api')
    .then(res => res.json())
    .then(data => this.setState({title: data.greeting}))
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            {this.state.title? <h1>{this.state.title}</h1>:<h1>loading...</h1>}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
