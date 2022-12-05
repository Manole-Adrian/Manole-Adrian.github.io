import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Rules.css";
import RuleBlock from "./RuleBlock/RuleBlock";

import rulesInfo from "../../../Data/Reguli.json"

export default function Rules(props) {
  return (
    <section className={`rulesSection ${props.curTab > 1 ? "sectionHidden" : ""}`}>
      <div className={`rulesTitle ${props.curTab > 1 ? "titleHiddenRules" : ""}`}>
        <h1>INFORMATII</h1>
      </div>
      <div className="rulesText">
        <Carousel animation="slide">
          <div className="rulesContainer">
            <RuleBlock img={rulesInfo["RuleList"][0]["img"]} content={rulesInfo["RuleList"][0]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][1]["img"]} content={rulesInfo["RuleList"][1]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][2]["img"]} content={rulesInfo["RuleList"][2]["content"]}/>
          </div>
          <div className="rulesContainer">
            <RuleBlock img={rulesInfo["RuleList"][3]["img"]} content={rulesInfo["RuleList"][3]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][4]["img"]} content={rulesInfo["RuleList"][4]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][5]["img"]} content={rulesInfo["RuleList"][5]["content"]}/>
          </div>
        </Carousel>
      </div>
      <div className="mobileRulesText">
      <Carousel animation="slide">

            <RuleBlock img={rulesInfo["RuleList"][0]["img"]} content={rulesInfo["RuleList"][0]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][1]["img"]} content={rulesInfo["RuleList"][1]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][2]["img"]} content={rulesInfo["RuleList"][2]["content"]}/>

            <RuleBlock img={rulesInfo["RuleList"][3]["img"]} content={rulesInfo["RuleList"][3]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][4]["img"]} content={rulesInfo["RuleList"][4]["content"]}/>
            <RuleBlock img={rulesInfo["RuleList"][5]["img"]} content={rulesInfo["RuleList"][5]["content"]}/>

        </Carousel>
      </div>
    </section>
  );
}
