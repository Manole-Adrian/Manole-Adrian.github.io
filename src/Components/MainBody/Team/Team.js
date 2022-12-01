import React from "react";
import "./Team.css";
import Member from "./Member/Member";
import teamData from "./../../../Data/Echipa.json";

import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Team() {
  return (
    <section className="teamSection">
      <h1 className="sectionTitle">Echipa MELLISAAA</h1>
      <div className="teamContainer">
        {teamData["TeamList"].map((el, i) => {
          return <AnimationOnScroll
            animatePreScroll={true}
            animateIn="fadeIn"
            animateOnce={true}
            duration={1.5}
            delay={i * 200}
          >
            <Member name={el["name"]} rank={el["rank"]} />
          </AnimationOnScroll>;
        })}
      </div>
    </section>
  );
}
