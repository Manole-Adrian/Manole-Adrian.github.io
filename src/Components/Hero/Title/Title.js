import React, { useEffect } from "react";
import "./Title.css";

export default function Title(props) {

  return (
    <div className={`titleContainer ${props.isStarted === true ? "titleContainerUp" : ""}`}>
      <h1 className="title">
        Time Switch!

      </h1>
      <h2 className={`subtitle`}>
        Un eveniment de MELLISAAA
      </h2>
    </div>
  );
}
