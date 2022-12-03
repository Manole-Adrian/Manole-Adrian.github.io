import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./Game.css";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InfoIcon from "@mui/icons-material/Info";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

import Tilt from 'react-parallax-tilt';

export default function Game(props) {
  return (
        // props.iter props.curGame props.setFunc
      
        <li className={`gameContainer ${props.curGame === props.iter ? "selectedGame" : ""}`} onClick={props.setFunc}>
          <div className="gameContentContainer">
            {props.curGame === props.iter && <div className="gameInfoContainer">
              <ul className="gameInfoList">
                {props.descriptionArr.map((el) => {
                  console.log(el.type);
                  return (
                    <div className="descriptionContainer">
                      {el.type === "players" && (
                        <AccountCircleIcon className="descriptionImg playersImg" />
                      )}
                      {el.type === "info" && (
                        <InfoIcon className="descriptionImg infoImg" />
                      )}
                      {el.type === "time" && (
                        <AccessTimeFilledIcon className="descriptionImg timeImg" />
                      )}
                      {el.type === "obj" && (
                        <FlagCircleIcon className="descriptionImg objImg" />
                      )}
                      <li>{el.content}</li>
                    </div>
                  );
                })}
              </ul>
            </div>}
            <img
              className="gameImg"
              src={`${props.name}.webp`}
              alt={props.name}
            ></img>
          </div>
        </li>
      
  );
}
