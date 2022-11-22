import React from 'react'
import GameList from './GameList/GameList'
import "./MainBody.css"
import Navigation from './Navigation/Navigation'

export default function MainBody() {


    return <section className='mainBodyContainer'>
        <Navigation />
        <GameList/>
    </section>
}