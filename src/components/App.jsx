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
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">React</p>
                      <p className="subtitle is-6">https://reactjs.org</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="http://devstickers.com/assets/img/pro/h8ci.png" alt="Redux image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Redux</p>
                      <p className="subtitle is-6">https://redux.js.org/</p>
                    </div>
                  </div>
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
