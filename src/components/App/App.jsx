import React, { Component, PropTypes } from 'react'
import style from './style.css'

import Header from '../Header/Header.jsx'
import About from '../Content/About/About.jsx'

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        <About />
      </div>
    )
  }
}

export default App;
