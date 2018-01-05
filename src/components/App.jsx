import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'
import MarkdownEditor from './MarkdownEditor';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <section className="section">
        <section className="section">
          <div className="container">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                This starter has been modified using some examples found in
              </p>
              <a className="button is-medium" href='https://reactjs.org' target='_blank' rel="noopener noreferrer">
                https://reactjs.org
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column">
              <Timer />
            </div>
            <div className="column">
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>
            <div className="column">
              <MarkdownEditor />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default App;
