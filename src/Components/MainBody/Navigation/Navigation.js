import React, { useEffect } from "react";
import "./Navigation.css";

export default function Navigation(props) {
  const pos1 = React.useRef();
  const pos2 = React.useRef();
  const pos3 = React.useRef();
  const pos4 = React.useRef();

  useEffect(() => {
    console.log(pos1.current.offsetLeft);
    console.log(pos2.current.offsetLeft);
    console.log(pos3.current.offsetLeft);
    console.log(pos4.current.offsetLeft);
  }, []);
  return (
    <nav>
      <div className="navContainer">
        <div ref={pos1} className="navButton">
          Introducere
        </div>
        <div ref={pos2} className="navButton">
          Jocuri
        </div>
        <div ref={pos3} className="navButton">
          Informatii
        </div>
        <div ref={pos4} className="navButton">
          Inscriere
        </div>
      </div>
      <img src="./pawn.png" className="pawnImg" alt="pawn" ></img>
    </nav>
  );
}
