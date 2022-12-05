import React, { useEffect } from "react";
import "./Navigation.css";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Navigation(props) {


  const [curButton, setCurButton] = React.useState(0);

  function getPosition() {
    
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
        <button className={`navButton ${curButton === 0 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(0)}>
          01
        </button>
        <button className={`navButton ${curButton === 1 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(1)}>
          02
        </button>
        <button className={`navButton ${curButton === 2 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(2)}>
          03
        </button>
        <button className={`navButton ${curButton === 3 ? 'navSelected' : ''}`} onClick={() => changePawnPosition(3)}>
          04
        </button>
      </div>
      <div className="mobileNavContainer">

        <BottomNavigation sx={{bgcolor:"#f1e6d9"}} showLabels value={curButton} onChange={(event,newVal) => {
          changePawnPosition(newVal);
        }}>
          <BottomNavigationAction sx={{color:"#B73C58"}} label="Intro" icon={<HomeIcon/>}></BottomNavigationAction>
          <BottomNavigationAction sx={{color:"#B73C58"}} label="Info" icon={<InfoIcon/>}></BottomNavigationAction>
          <BottomNavigationAction sx={{color:"#B73C58"}}label="Jocuri" icon={<SportsEsportsIcon/>}></BottomNavigationAction>
          <BottomNavigationAction sx={{color:"#B73C58"}} label="Echipa" icon={<GroupsIcon/>}></BottomNavigationAction>
        </BottomNavigation>
      </div>
    </nav>
  );
}
