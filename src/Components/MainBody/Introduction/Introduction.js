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
            <div className="infoBlock cardShadow">
              <img className="infoImg" src="introduction2.svg"></img>
              <p>
                Vă era dor sa intrați în era copiilor, măcar pentru puțin timp?
                Echipa MELLISAAA vă aduce această mică bucurie pe data de
                07.12.2022, într-o zi de miercuri. Ați mai fost cumva la
                DISNAYLAND? Dacă nu, nicio problemă! Aducem noi, din desene,
                prinții și prințesele la Politehnică să ne ajute să trecem mai
                ușor peste sesiune! Ne vor ajuta să ne relaxăm câteva ore și să
                ne distrăm la maxim cu o seară de NIGHT BOARD GAMES!
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
            <div className="infoBlock cardShadow">
              <img className="infoImg" src="introduction1.svg"></img>
              <p>
                O să aveți ocazia să jucați toate jocurile puse la dispoziție
                într-un anumit interval de timp pentru că… TIME SWITCH!!! Fiind
                și denumirea evenimentului nostru! Din adulți deveniți copii! 😁
                Ca la final să folosim o poțiune magică să vă transformăm înapoi
                în cei mai tari studenți! Suntem o echipă implicată și dornică
                de amuzament care a dorit să readucă nostalgia de copilărie în
                zilele noastre de studenție! Vă așteptăm în număr cât mai mare
                și cu chef de distracție! 🧚🏼‍♀️🧞‍♀️🧜🏼‍♀️
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}
