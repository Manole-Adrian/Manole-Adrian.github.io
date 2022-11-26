import React from "react";
import "./GameList.css";
import Game from "./Game/Game";
import { AnimationOnScroll } from "react-animation-on-scroll";

import gamesData from "../../../Data/Jocuri.json";

export default function GameList() {
  console.log(gamesData["GameList"]);

  return (
    <ul className="gameList" id="gameList">
      {gamesData["GameList"].map((el,i) => {
        return (
          <article>
            {i !==0 &&<AnimationOnScroll
      animatePreScroll={true}
      animateIn="lineIn"
      animateOnce={true}
      duration={0.5}
    >
            <div className="vr"></div>
            </AnimationOnScroll>}
            <Game name={el["name"]} descriptionArr={el["description"]} />
          </article>
        );
      })}
    </ul>
  );
}
