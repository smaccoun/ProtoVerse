import React, { Component, PropTypes } from 'react'
import style from './style.css'
import ProtoLogo from '../../../public/protoverse2.png'

const Header = () => {
  return (
    <div className={style.container}>
      <img src={ProtoLogo} />
    </div>
  )
}

export default Header;
