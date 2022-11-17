import React, { useEffect } from "react";
import "./Title.css";

export default function Title() {

    const [scrollPos,setScrollPos] = React.useState(0);
    const [isBanner,setIsBanner] = React.useState(false)
    function handleScroll() {
        const position = window.scrollY;
        setScrollPos(position)
        
    }

    useEffect(() => {
        window.addEventListener("scroll",handleScroll,{passive:true});
        return () => {
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    useEffect(() => {
        if(scrollPos > 150 && isBanner === false)
        {
            setIsBanner(true);
        } 
        if (scrollPos <= 150 && isBanner === true) {
            setIsBanner(false);
        }
    },[scrollPos])

  return (
    <div className={`titleContainer ${isBanner ? "banner" : ""}`}>
      <h1 className="title">Numele evenimentului</h1>
      <h2 className={`subtitle ${isBanner? "disappear" : ""}`}>-mic slogan? / numele echipei-</h2>
    </div>
  );
}
