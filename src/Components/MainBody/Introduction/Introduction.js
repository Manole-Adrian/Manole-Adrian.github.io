import React from "react";
import "./Introduction.css";
import Countdown from "react-countdown";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function Introduction(props) {
  return (
    <section
      className={`infoSection ${props.curTab > 0 ? "sectionHidden" : ""}`}
    >
      <img className="decoImg1" src="shit happens.png" alt="shite"></img>
      <img className="decoImg2" src="Uno Flip.png" alt="shite"></img>
      <div className="decoBlob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#B73C58"
            d="M42.4,-72.4C54,-66.7,61.9,-53.5,68.6,-40.2C75.3,-26.9,80.9,-13.4,80.2,-0.4C79.4,12.6,72.5,25.2,64.5,36.4C56.6,47.6,47.7,57.4,36.8,61.9C25.9,66.5,12.9,65.8,1.5,63.3C-10,60.8,-20.1,56.5,-32,52.5C-43.9,48.5,-57.8,44.9,-62.1,36.2C-66.4,27.6,-61.2,13.8,-61.9,-0.4C-62.6,-14.6,-69.2,-29.2,-65.4,-38.7C-61.6,-48.3,-47.3,-52.8,-34.7,-58C-22.1,-63.2,-11,-69,2.2,-72.8C15.4,-76.5,30.7,-78.2,42.4,-72.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={`infoTitle ${props.curTab > 0 ? "titleHidden" : ""}`}>
        <h1>INTRODUCERE</h1>
      </div>
      <div className="infoText">
        O seara de board-games pe echipe, unde trebuie sa cooperezi si sa
        improvizezi pentru a reusi! <br/>
        In urma competitiei, toata lumea se va putea juca orice la board games & chill
      </div>
      <div className={`infoCountdown ${props.curTab > 0 ? "imgHidden" : ""}`}>
        <p>Mai este:</p>
        <Countdown date={new Date("2022-12-07T20:00:00")} />
      </div>
      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScBT18PYYb60uD5ylopUUCqYXiXtPeBHj_HoEc2zuaY2YSOtg/viewform?usp=sf_link" className="applyButton">
        Inscrie-te <KeyboardDoubleArrowRightIcon className="applyIcon" />
      </a>
    </section>
  );
}
