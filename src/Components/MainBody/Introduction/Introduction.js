import React from "react";
import "./Introduction.css";

export default function Introduction(props) {

  
  return (
    <section className={`infoSection ${props.curTab > 0 ? "sectionHidden" : ""}`}>
      <div className={`infoTitle ${props.curTab > 0 ? "titleHidden" : ""}`}>
        <h2>01</h2>
        <h1>INTRODUCERE</h1>
      </div>
      <div className="infoText">
        Vă era dor sa intrați în era copiilor, măcar pentru puțin timp? Echipa
        MELLISAAA vă aduce această mică bucurie pe data de 07.12.2022, într-o zi
        de miercuri. Aducem noi, din desene, prinții și prințesele la Politehnică să ne ajute
        să trecem mai ușor peste sesiune! Ne vor ajuta să ne relaxăm câteva ore
        și să ne distrăm la maxim cu o seară de NIGHT BOARD GAMES! O să aveți
        ocazia să jucați toate jocurile puse la dispoziție într-un anumit
        interval de timp pentru că… TIME SWITCH!!! Din adulți deveniți copii! 😁 Ca la final să
        folosim o poțiune magică să vă transformăm înapoi în cei mai tari
        studenți! Suntem o echipă implicată și dornică de amuzament care a dorit
        să readucă nostalgia de copilărie în zilele noastre de studenție! Vă
        așteptăm în număr cât mai mare și cu chef de distracție! 🧚🏼‍♀️🧞‍♀️🧜🏼‍♀️
      </div>
      <img className={`infoImg ${props.curTab > 0 ? "imgHidden" : ""}`} src="introduction1.svg" alt="damn"></img>
    </section>
  );
}
