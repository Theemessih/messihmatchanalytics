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
{id:10,league:"Jackpot",home:"Juventus",away:"Napoli",tip:"LOCKED - VIP ONLY",odd:"VIP",time:"20:00"},
];
const checkCode=()=>{
if(code==="MESSIH2025"||code==="MESSIH"){setVip(true);setShow(false);alert("VIP Activated!");}else{alert("Wrong Code! Lipa Till 1581046 first");}
};
return(
<div style={{background:"black",color:"white",padding:"20px",minHeight:"100vh",fontFamily:"Arial"}}>
<h1 style={{textAlign:"center"}}>MESSIH <span style={{color:"#4ade80"}}>MATCH ANALYTICS</span></h1>
<p style={{textAlign:"center",color:"#aaa"}}>Game analysis across all betting sites including jackpots</p>
<div style={{textAlign:"center",margin:"20px"}}>
{!vip?<button onClick={()=>setShow(true)} style={{background:"#4ade80",color:"black",padding:"15px 30px",fontWeight:"bold",border:"none",borderRadius:"8px",fontSize:"18px"}}>Unlock VIP - 10 Games</button>:<div style={{background:"#4ade80",color:"black",padding:"10px",borderRadius:"8px",fontWeight:"bold"}}>VIP ACTIVE ✅</div>}
</div>
<div>
{games.map(g=>(
<div key={g.id} style={{background:"#111",border:"1px solid #4ade80",padding:"15px",margin:"10px 0",borderRadius:"8px",opacity:(g.league==="Jackpot"&&!vip)?0.5:1}}>
<div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#4ade80",fontWeight:"bold"}}>{g.league}</span><span>{g.time}</span></div>
<div style={{margin:"10px 0",fontSize:"18px",fontWeight:"bold"}}>{g.home} vs {g.away}</div>
<div style={{display:"flex",justifyContent:"space-between"}}><span>Tip: <b style={{color:"#4ade80"}}>{(g.league==="Jackpot"&&!vip)?"🔒 VIP ONLY":g.tip}</b></span><span style={{background:"#4ade80",color:"black",padding:"5px 10px",borderRadius:"4px",fontWeight:"bold"}}>{g.odd}</span></div>
</div>
))}
</div>
<div style={{background:"#111",border:"1px solid #333",padding:"20px",marginTop:"30px",borderRadius:"8px",textAlign:"center"}}>
<h3>Contact Support</h3>
<p>WhatsApp: 0793921100</p>
<a href="https://wa.me/254793921100" target="_blank" style={{background:"#25D366",color:"white",padding:"12px 25px",borderRadius:"8px",textDecoration:"none",fontWeight:"bold",display:"inline-block",marginTop:"10px"}}>Chat on WhatsApp</a>
<p style={{marginTop:"15px",fontSize:"12px",color:"#666"}}>Till Number: 1581046 - Buy Goods Till</p>
</div>
{show&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",zIndex:1000}}>
<div style={{background:"#111",border:"1px solid #4ade80",padding:"25px",borderRadius:"12px",maxWidth:"400px",width:"100%"}}>
<h2 style={{textAlign:"center"}}>Lipa na M-Pesa</h2>
<div style={{background:"white",color:"black",padding:"15px",textAlign:"center",borderRadius:"8px",margin:"15px 0"}}><p>Buy Goods Till</p><p style={{fontSize:"30px",fontWeight:"900",color:"#4ade80"}}>1581046</p><p>Name: MESSIH</p></div>
<input value={code} onChange={e=>setCode(e.target.value)} placeholder="Enter VIP Code" style={{width:"100%",padding:"12px",margin:"15px 0",borderRadius:"8px",border:"1px solid #4ade80",background:"black",color:"white",boxSizing:"border-box"}}/>
<button onClick={checkCode} style={{width:"100%",background:"#4ade80",color:"black",padding:"12px",fontWeight:"bold",border:"none",borderRadius:"8px"}}>Activate VIP</button>
<button onClick={()=>setShow(false)} style={{width:"100%",background:"transparent",color:"white",padding:"10px",marginTop:"10px",border:"1px solid #333",borderRadius:"8px"}}>Cancel</button>
<a href="https://wa.me/254793921100" style={{display:"block",textAlign:"center",background:"#25D366",color:"white",padding:"12px",borderRadius:"8px",textDecoration:"none",marginTop:"15px",fontWeight:"bold"}}>Confirm Payment WhatsApp 0793921100</a>
</div>
</div>}
</div>
);
}
