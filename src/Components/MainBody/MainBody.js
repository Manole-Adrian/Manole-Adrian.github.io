import React from 'react'
import GameList from './GameList/GameList'
import Introduction from './Introduction/Introduction'
import "./MainBody.css"
import Rules from './Rules/Rules'
import Team from './Team/Team'

export default function MainBody(props) {

    console.log(props.curTab)

    return <section className='mainBodyContainer'>
        <Introduction curTab={props.curTab} />
        <Rules  curTab={props.curTab}/>
        <GameList curTab={props.curTab}/>
        <Team curTab={props.curTab}/>
    </section>
}