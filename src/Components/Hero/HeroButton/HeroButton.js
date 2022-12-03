import React from 'react'
import "./HeroButton.css"

export default function HeroButton(props) {
    function handleClick() {
        props.setIsStarted(true)
    }

    return <a className={`heroButton ${props.isStarted === true ? "hideHeroButton" : ""}`} onClick={handleClick}>
        Afla mai multe
    </a>
}