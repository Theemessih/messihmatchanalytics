import { useState } from "react";
export default function App(){
const [vip,setVip]=useState(false);
const [show,setShow]=useState(false);
const [code,setCode]=useState("");

const games=[
{id:1,league:"Premier League",home:"Arsenal",away:"Man City",tip:"Over 2.5 Goals",odd:"1.85",time:"16:00"},
{id:2,league:"Champions League",home:"Real Madrid",away:"Barcelona",tip:"BTTS Yes",odd:"1.75",time:"21:00"},
{id:3,league:"KPL",home:"Gor Mahia",away:"Tusker",tip:"Home Win",odd:"2.10",time:"15:00"},
{id:4,league:"La Liga",home:"Atletico Madrid",away:"Sevilla",tip:"Under 3.5",odd:"1.40",time:"18:30"},
{id:5,league:"Bundesliga",home:"Bayern Munich",away:"Dortmund",tip:"Home Win",odd:"1.90",time:"19:30"},
{id:6,league:"Serie A",home:"Inter",away:"AC Milan",tip:"Over 1.5",odd:"1.35",time:"20:45"},
{id:7,league:"Ligue 1",home:"PSG",away:"Marseille",tip:"Home Win",odd:"1.60",time:"21:00"},
{id:8,league:"EPL",home:"Liverpool",away:"Chelsea",tip:"Over 2.5",odd:"1.80",time:"17:30"},
{id:9,league:"Jackpot",home:"Man Utd",away:"Tottenham",tip:"LOCKED - VIP ONLY",odd:"VIP",time:"16:00"},
{id:10,league:"Jackpot",home:"Juventus",away:"Napoli",tip:"LOCKED - VIP ONLY",odd:"VIP
