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
  React.useEffect(() => {
    if (props.curTab !== -1) {
      setCurGame(-1);
    }
  },[props.curTab])

  return (
    <section  className={`gamesSection ${props.curTab > 2 ? "sectionHidden" : ""}`}>
      <div className={`gamesTitle ${props.curTab > 2 ? "titleHiddenGames" : ""}`}>
        <h1>JOCURI</h1>
      </div>
      {curGame === -1 && <div className="futureGame">
        ?
      </div>}
      <div className="gamesContainer">
        {gamesData["GameList"].map((el,i) => {
          return <Game name={el["name"]} descriptionArr={el["description"]} iter={i} curGame={curGame} setFunc={() => {handleClick(i)}} />
        })}
      </div>
      
      
    </section>
  );
}
