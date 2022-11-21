import React from 'react'
import "./GameList.css"
import Game from "./Game/Game"

import gamesData from "../../../Data/Jocuri.json"

export default function GameList() {
    
    console.log(gamesData["GameList"])

    return <ul className='gameList'>
        {gamesData["GameList"].map((el) => {
            return <Game name={el["name"]} descriptionArr = {el["description"]}/>
        })}
    </ul>
}