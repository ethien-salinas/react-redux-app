import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import TodoApp from './TodoApp';
import MarkdownEditor from './MarkdownEditor';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <section class="section">
        <section class="section">
          <div class="container">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                This starter has been modified using some examples found in
              </p>
              <a class="button is-medium" href='https://reactjs.org' target='_blank' rel="noopener noreferrer">
                https://reactjs.org
              </a>
            </div>
          </div>
        </section>
        <section class="section">
          <div class="columns">
            <div class="column">
              <Timer />
            </div>
            <div class="column">
              <TodoApp />
            </div>
            <div class="column">
              <MarkdownEditor />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default App;
