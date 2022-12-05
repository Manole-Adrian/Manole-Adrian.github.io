import React from "react";
import "./Team.css";
import Member from "./Member/Member";
import teamData from "./../../../Data/Echipa.json";

import Carousel from "react-material-ui-carousel";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function Team(props) {
  return (
    <section
      className={`teamSection ${props.curTab > 3 ? "sectionHidden" : ""}`}
    >
      <div className={`teamTitle ${props.curTab > 3 ? "titleHidden" : ""}`}>
        <h1>MELLISAAA</h1>
      </div>
      <div className="teamText">
        Echipa noastra abia asteapta sa te vada la eveniment! Asa ca, ce mai
        astepti?
      </div>
      <div className="teamDispContainer">
        <div className="teamDisp">
          <Member iter={1} name={teamData["TeamList"][0]["name"]} />
          <Member iter={2} name={teamData["TeamList"][1]["name"]} />
          <Member iter={3} name={teamData["TeamList"][2]["name"]} />
          <Member iter={4} name={teamData["TeamList"][3]["name"]} />
        </div>
        <div className="teamDisp">
          <Member iter={5} name={teamData["TeamList"][4]["name"]} />
          <Member iter={6} name={teamData["TeamList"][5]["name"]} />
          <Member iter={7} name={teamData["TeamList"][6]["name"]} />
          <Member iter={8} name={teamData["TeamList"][7]["name"]} />
          <Member iter={9} name={teamData["TeamList"][8]["name"]} />
        </div>
        <div className="teamDisp"></div>
      </div>
      <div className="mobileTeamDispContainer">
        <Carousel animation="slide">
          <div className="mobileTeamDisp">
            <Member iter={1} name={teamData["TeamList"][0]["name"]} />
            <Member iter={2} name={teamData["TeamList"][1]["name"]} />
            <Member iter={3} name={teamData["TeamList"][2]["name"]} />
            <Member iter={4} name={teamData["TeamList"][3]["name"]} />
          </div>
          <div className="mobileTeamDisp">
            <Member iter={5} name={teamData["TeamList"][4]["name"]} />
            <Member iter={6} name={teamData["TeamList"][5]["name"]} />
            <Member iter={7} name={teamData["TeamList"][6]["name"]} />
            <Member iter={8} name={teamData["TeamList"][7]["name"]} />
          </div>
          <div className="mobileTeamDisp">
            <Member iter={9} name={teamData["TeamList"][8]["name"]} />
          </div>
        </Carousel>
      </div>
      <a
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLScBT18PYYb60uD5ylopUUCqYXiXtPeBHj_HoEc2zuaY2YSOtg/viewform?usp=sf_link"
        className="applyButton teamApplyButton"
      >
        Inscrie-te chiar acum{" "}
        <KeyboardDoubleArrowRightIcon className="applyIcon" />
      </a>
    </section>
  );
}
