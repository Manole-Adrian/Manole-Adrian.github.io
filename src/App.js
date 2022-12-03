import "./App.css";
import Hero from "./Components/Hero/Hero";
import MainBody from "./Components/MainBody/MainBody";

import React from 'react'
import Navigation from "./Components/Navigation/Navigation";

function App() {


  const [isStarted,setIsStarted] = React.useState(false)
  const [curTab,setCurTab] = React.useState(0)
  
  return (
    <div className="App">
      <main>
        <Hero isStarted={isStarted} setIsStarted={setIsStarted}/>
        {isStarted && <Navigation setCurTab={setCurTab}/>}
        <MainBody curTab={curTab}/>
      </main>
    </div>
  );
}

export default App;
