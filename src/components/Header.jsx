import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome to React</h1>
            <h2 className="subtitle">This starter has been modified using some examples found in:</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
