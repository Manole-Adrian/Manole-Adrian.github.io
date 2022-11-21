import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Game.css";

export default function Game(props) {
  return (
    <AnimationOnScroll animatePreScroll={true} animateIn="fadeIn" animateOnce={true} duration={1.5}>
      <li className="gameContainer">
        <div className="gameInfoContainer">
          <ul className="gameInfoList">
            {props.descriptionArr.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
        <img
          className="gameImg"
          src={`${props.name}.webp`}
          alt={props.name}
        ></img>
      </li>
    </AnimationOnScroll>
  );
}
