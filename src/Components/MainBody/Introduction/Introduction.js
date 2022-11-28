import React from "react";
import "./Introduction.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Introduction() {
  return (
    <section className="infoSection" id="info">
      <div className="infoContainer">
        <h1 className="sectionTitle"> Introducere </h1>
        <div className="infoContent">
          <AnimationOnScroll
            animatePreScroll={true}
            animateIn="fadeIn"
            animateOnce={true}
            duration={1}
          >
            <div className="infoBlock">
              <img className="infoImg" src="introduction2.svg"></img>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animatePreScroll={true}
            animateIn="fadeIn"
            animateOnce={true}
            duration={1}
            delay={300}
          >
            <div className="infoBlock">
              <img className="infoImg" src="introduction1.svg"></img>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}
