import React from 'react'
import GameList from './GameList/GameList'
import Introduction from './Introduction/Introduction'
import "./MainBody.css"
import Navigation from './Navigation/Navigation'
import Rules from './Rules/Rules'

export default function MainBody() {


    return <section className='mainBodyContainer'>
        <Navigation />
        <Introduction />
        <Rules/>
        <GameList/>
    </section>
}