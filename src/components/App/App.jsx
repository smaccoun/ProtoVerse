import React, { Component, PropTypes } from 'react'
import style from './style.css'

import Header from '../Header/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
      </div>
    )
  }
}

export default App;
