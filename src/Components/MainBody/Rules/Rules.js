import React from "react";
import "./Rules.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

import rulesData from "../../../Data/Reguli.json";
import RuleBlock from "./RuleBlock/RuleBlock";

export default function Rules() {
  return (
    <section id="rules">
      <h2 className="sectionTitle">Informatii</h2>
      <div className="rulesContainer">
        {rulesData["RuleList"].map((el, i) => {
          return (
            <AnimationOnScroll
              animatePreScroll={true}
              animateIn="fadeIn"
              animateOnce={true}
              duration={1}
              delay={i*200}
            >
              <RuleBlock img={el.img} content={el.content} />
            </AnimationOnScroll>
          );
        })}
      </div>
    </section>
  );
}
