import React from "react";
import "./Team.css";
import Member from "./Member/Member";
import teamData from "./../../../Data/Echipa.json";

import Carousel from "react-material-ui-carousel";

import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Team() {

  return (
    <section className="teamSection">
      <h1 className="sectionTitle">Echipa MELLISAAA</h1>
      <div className="teamContainer">
        <AnimationOnScroll
          animatePreScroll={true}
          animateIn="fadeIn"
          animateOnce={true}
          duration={1.5}
          delay={200}
        >
            <Carousel animation="slide" duration={600} className="teamCarousel"  navButtonsAlwaysVisible={true}>
          {/* {teamData["TeamList"].map((el, i) => {
            return (
              
                <Member name={el["name"]} rank={el["rank"]} />
                )
            })} */}
            <div className="setContainer">
                <Member name={teamData["TeamList"][0]["name"]} />
                <Member name={teamData["TeamList"][1]["name"]} />
                <Member name={teamData["TeamList"][2]["name"]} />
            </div>
            <div className="setContainer">
                <Member name={teamData["TeamList"][3]["name"]} />
                <Member name={teamData["TeamList"][4]["name"]} />
                <Member name={teamData["TeamList"][5]["name"]} />
            </div>
            <div className="setContainer">
                <Member name={teamData["TeamList"][6]["name"]} />
                <Member name={teamData["TeamList"][7]["name"]} />
                <Member name={teamData["TeamList"][8]["name"]} />
            </div>
            </Carousel>
        </AnimationOnScroll>
        
      </div>
    </section>
  );
}
