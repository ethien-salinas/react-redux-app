import React, { Component } from 'react';
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
        <div className="columns">
          <div className="column">

            <section className="hero is-medium is-dark is-bold">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">Welcome to React</h1>
                  <h2 className="subtitle">This starter has been modified using some examples found in:</h2>
                  <a className="button" href='https://reactjs.org' target='_blank' rel="noopener noreferrer">
                    https://reactjs.org</a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <Timer />
            </div>
            <div className="column">
              <MarkdownEditor />
            </div>
            <div className="column">
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default App;
