import React from 'react'
import "./RuleBlock.css"

import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SellIcon from '@mui/icons-material/Sell';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function RuleBlock(props) {
    return (<article className='ruleBlock'>
        <div className='ruleIcon'>

        {props.img === "switch" && <WifiProtectedSetupIcon className='test'/>}
        {props.img === "teams" && <PeopleAltIcon/>}
        {props.img === "price" && <SellIcon/>}
        {props.img === "win" && <EmojiEventsIcon/>}
        {props.img === "date" && <DateRangeIcon/>}
        </div>
        <p className='ruleContent'>{props.content}</p>
    </article>)
}