import React from "react";
import "./GameList.css";
import Game from "./Game/Game";
import { AnimationOnScroll } from "react-animation-on-scroll";

import gamesData from "../../../Data/Jocuri.json";

export default function GameList() {
  return (
    <section  id="gameList">
      <h2 className="sectionTitle">Jocuri</h2>
      <ul className="gameList">
        {gamesData["GameList"].map((el, i) => {
          return (
            <article>
              {i !== 0 && (
                <AnimationOnScroll
                  animatePreScroll={true}
                  animateIn="lineIn"
                  animateOnce={true}
                  duration={1}
                  delay={500}
                >
                  <div className="vr"></div>
                </AnimationOnScroll>
              )}
              <Game name={el["name"]} descriptionArr={el["description"]} />
            </article>
          );
        })}
      </ul>
    </section>
  );
}
