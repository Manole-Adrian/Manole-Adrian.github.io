import React from 'react'
import "./Member.css"

export default function Member(props) {
    return (<article className='memberBlock cardShadow'>
        <img alt={props.name} src={`${props.name}.png`}></img>
        <p>{props.name}</p>
    </article>)
}