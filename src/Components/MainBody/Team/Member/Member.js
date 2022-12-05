import React from 'react'
import "./Member.css"

export default function Member(props) {
    return (<article className='memberBlock cardShadow'>
        <img style={{animationDelay:props.iter*1500+"ms"}} alt={props.name} src={`${props.name}.jpg`}></img>
        <p>{props.name}</p>
    </article>)
}