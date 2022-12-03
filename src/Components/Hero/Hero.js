import React from 'react'
import Background from './Background/Background'
import "./Hero.css"
import HeroButton from './HeroButton/HeroButton'
import Title from './Title/Title'

export default function Hero(props) {
    
    
    return <section className={`heroContainer ${props.isStarted === true ? "heroLeave" : ""}`}>
        <Background/>
        <Title isStarted={props.isStarted}/>
        <HeroButton isStarted={props.isStarted} setIsStarted={props.setIsStarted}/>

    </section>
}