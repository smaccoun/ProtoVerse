import React from 'react';
import style from './style.css'
import SteveFace from './img/SteveFace.jpg'
import JoshFace from './img/JoshFace.jpg'
import JeffFace from './img/JeffFace.jpg'

const About = () => {
  return(
    <div className={style.container}>
      <img src={SteveFace}/>
      <img src={JoshFace}/>
      <img src={JeffFace}/>
    </div>
  )
}

export default About
