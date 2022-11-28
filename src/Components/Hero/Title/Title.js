import React, { useEffect } from "react";
import "./Title.css";

export default function Title() {
  const [scrollPos, setScrollPos] = React.useState(0);
  const [isBanner, setIsBanner] = React.useState(false);
  function handleScroll() {
    const position = window.scrollY;
    setScrollPos(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPos > 100 && isBanner === false) {
      setIsBanner(true);
    }
    if (scrollPos <= 100 && isBanner === true) {
      setIsBanner(false);
    }
  }, [scrollPos]);

  return (
    <div className={`titleContainer ${isBanner ? "banner" : ""}`}>
      <h1 className="title">
        <a href="#top">
        {isBanner && (

            <div>
            <span className="color1">T</span>
            <span className="color2">S</span>
            </div>

        )}
        {
            !isBanner && <div>Time Switch</div>
        }
        </a>
      </h1>
      <h2 className={`subtitle ${isBanner ? "disappear" : ""}`}>
        Un eveniment de MELLISAAA
      </h2>
    </div>
  );
}
