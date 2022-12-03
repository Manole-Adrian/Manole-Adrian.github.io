import React, { useEffect } from "react";
import "./Navigation.css";

export default function Navigation(props) {
  const pos1 = React.useRef();
  const pos2 = React.useRef();
  const pos3 = React.useRef();
  const pos4 = React.useRef();

  const posRefArr = [React.useRef(),React.useRef(),React.useRef(),React.useRef()]

  const [pawnX,setPawnX] = React.useState(0);
  const [curButton, setCurButton] = React.useState(0);

  function getPosition() {
    const x = posRefArr[curButton].current.offsetLeft + (posRefArr[curButton].current.offsetWidth)/2;
    console.log(curButton)
    setPawnX(x) 
  }

  function changePawnPosition(newPos) {
    setCurButton(newPos);
    props.setCurTab(newPos)
  } 

  useEffect(() => {
    getPosition();
  }, []);
  useEffect(() => {
    getPosition();
  }, [curButton]);
  

  return (
    <nav>
      <div className="navContainer">
        <a ref={posRefArr[0]} className={`navButton ${curButton === 0 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(0)}>
          01
        </a>
        <a ref={posRefArr[1]} className={`navButton ${curButton === 1 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(1)}>
          02
        </a>
        <a ref={posRefArr[2]} className={`navButton ${curButton === 2 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(2)}>
          03
        </a>
        <a ref={posRefArr[3]} className={`navButton ${curButton === 3 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(3)}>
          04
        </a>
      </div>
      {/* <img style={{left:pawnX}} src="./pawn.png" className="pawnImg" alt="pawn" ></img> */}
    </nav>
  );
}
