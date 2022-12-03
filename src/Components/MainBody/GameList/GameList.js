import React from "react";
import "./GameList.css";
import Game from "./Game/Game";

import gamesData from "../../../Data/Jocuri.json";

export default function GameList(props) {

  const [curGame,setCurGame] = React.useState(-1);

  function handleClick(num) {
    if (curGame === num) {
      setCurGame(-1)
    } else {
      setCurGame(num)
    }
  }

  return (
    <section  className="gamesSection">
      <div className={`gamesTitle ${props.curTab > 2 ? "titleHiddenGames" : ""}`}>
        <h2>03</h2>
        <h1>JOCURI</h1>
      </div>
      <div className="futureGame">
        ?
      </div>
      <div className="gamesContainer">
        {gamesData["GameList"].map((el,i) => {
          return <Game name={el["name"]} descriptionArr={el["description"]} iter={i} curGame={curGame} setFunc={() => {handleClick(i)}} />
        })}
      </div>
      <div className="gamesText">
        In cadrul evenimentului principal vor fi 6 jocuri.  <br/> In orele de Board Gaming & Chill, oricine se va putea juca orice, inclusiv jocuri care nu sunt aici.
      </div>
      
    </section>
  );
}
