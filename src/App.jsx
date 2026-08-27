import { useState } from "react";
export default function App(){
const [vip,setVip]=useState(false);
const [show,setShow]=useState(false);
const [code,setCode]=useState("");
const games=[
{id:1,league:"Premier League",home:"Arsenal",away:"Man City",tip:"Over 1.5 Goals",conf:77,isJack:true,reason:"Arsenal scored last 12 home"},
{id:2,league:"Premier League",home:"Man Utd",away:"Liverpool",tip:"Over 2.5",conf:88,isJack:true,reason:"Last 5 over 2.5 goals"},
{id:3,league:"LaLiga",home:"Barcelona",away:"Real Madrid",tip:"BTTS Yes",conf:82,isJack:true,reason:"El Clasico 8/10 BTTS"},
{id:4,league:"Champions League",home:"Real Madrid",away:"Man City",tip:"BTTS Yes",conf:88,isJack:true,reason:"Both scored last 6 UCL"},
{id:5,league:"Champions League",home:"Bayern Munich",away:"PSG",tip:"Over 2.5",conf:85,isJack:true,reason:"Bayern 12 goals last 3 home"},
{id:6,league:"KPL",home:"Gor Mahia",away:"Tusker",tip:"Home Win",conf:75,isJack:false,reason:"Gor unbeaten home 10"},
{id:7,league:"KPL",home:"AFC Leopards",away:"KCB",tip:"Under 2.5",conf:70,isJack:false,reason:"KPL low scoring"},
{id:8,league:"Bundesliga",home:"Dortmund",away:"Leverkusen",tip:"Over 1.5",conf:80,isJack:false,reason:"Both attacking teams"},
{id:9,league:"Serie A",home:"Inter Milan",away:"Juventus",tip:"Under 3.5",conf:72,isJack:false,reason:"Tight Italian derby"},
{id:10,league:"Ligue 1",home:"PSG",away:"Marseille",tip:"Home Win",conf:78,isJack:false,reason:"PSG strong at home"},
];
return(
<div style={{background:"black",color:"white",padding:"20px",minHeight:"100vh",paddingBottom:"90px"}}>
<h1 style={{textAlign:"center",fontSize:"28px",fontWeight:"900"}}>MESSIH <span style={{color:"#4ade80"}}>MatchAnalytics</span></h1>
<p style={{textAlign:"center",color:"gray",fontSize:"13px"}}>10 Pro Predictions Daily - Eldoret Based</p>
<div style={{textAlign:"center",margin:"15px"}}>
{!vip?<button onClick={()=>setShow(true)} style={{background:"#4ade80",color:"black",padding:"12px 24px",borderRadius:"25px",fontWeight:"bold",border:"none"}}>Unlock JACKPOT VIP - 350 KSH</button>:<span style={{background:"gold",color:"black",padding:"8px 15px",borderRadius:"20px",fontWeight:"bold"}}>VIP UNLOCKED - 5 Jackpot Tips</span>}
</div>
{show&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.95)",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px",zIndex:100}}>
<div style={{background:"#111",border:"2px solid #4ade80",padding:"20px",borderRadius:"15px",maxWidth:"320px",width:"100%"}}>
<h2 style={{textAlign:"center",margin:0}}>Lipa na M-Pesa</h2>
<div style={{background:"white",color:"black",padding:"15px",textAlign:"center",borderRadius:"10px",margin:"15px 0"}}>
<p style={{margin:0,fontSize:"12px"}}>Buy Goods Till Number</p><p style={{fontSize:"32px",fontWeight:"900",color:"green",margin:"5px 0"}}>1581046</p><p style={{margin:0,fontSize:"11px"}}>MESSIH ANALYTICS</p><p style={{margin:"8px 0 0 0",fontWeight:"bold"}}>Amount: 350 KSH</p>
</div>
<p style={{fontSize:"11px",color:"#aaa",textAlign:"center"}}>M-Pesa - Lipa na M-Pesa - Buy Goods<br/>Till 1581046 & 350 KSH - Enter Code below</p>
<input value={code} onChange={e=>setCode(e.target.value)} placeholder="Enter M-Pesa Code e.g. QGH..." style={{width:"100%",padding:"12px",margin:"12px 0",background:"black",color:"white",border:"1px solid #333",borderRadius:"8px",boxSizing:"border-box"}}/>
<button onClick={()=>{if(code.length>5){setVip(true);setShow(false);alert("Welcome to VIP! Karibu!");}else{alert("Enter your M-Pesa code");}}} style={{width:"100%",background:"#4ade80",color:"black",padding:"12px",fontWeight:"bold",border:"none",borderRadius:"8px"}}>Verify & Unlock</button>
<a href="https://wa.me/254793921100?text=Nime%20lipa%20350%20KSH%20Till%201581046%20Code:" target="_blank" style={{display:"block",textAlign:"center",marginTop:"10px",color:"#4ade80",fontSize:"13px",textDecoration:"none"}}>Need Help? WhatsApp Us</a>
<button onClick={()=>setShow(false)} style={{width:"100%",marginTop:"8px",color:"gray",background:"none",border:"none"}}>Cancel</button>
</div></div>}
<div style={{maxWidth:"600px",margin:"0 auto"}}>
{games.map(g=>{
const locked=g.isJack&&!vip;
return<div key={g.id} style={{background:"#111",padding:"15px",margin:"10px 0",borderRadius:"12px",border:locked?"1px solid rgba(255,215,0,0.3)":"1px solid #222"}}>
<div style={{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"gray"}}><span>{g.league}</span>{g.isJack&&<span style={{background:vip?"gold":"rgba(255,215,0,0.2)",color:vip?"black":"gold",padding:"2px 8px",borderRadius:"10px",fontWeight:"bold",fontSize:"10px"}}>JACKPOT</span>}<span>{g.conf}%</span></div>
<h3 style={{margin:"8px 0"}}>{g.home} vs {g.away}</h3>
{locked?<div style={{background:"black",padding:"12px",textAlign:"center",marginTop:"10px",borderRadius:"8px",border:"1px dashed rgba(255,215,0,0.3)"}}><p style={{color:"gold",margin:0,fontWeight:"bold",fontSize:"13px"}}>Locked Jackpot Tip</p><button onClick={()=>setShow(true)} style={{background:"gold",color:"black",padding:"6px 16px",borderRadius:"15px",marginTop:"8px",border:"none",fontWeight:"bold",fontSize:"12px"}}>Pay 350 KSH to Unlock</button></div>:<div style={{background:"#1a1a1a",padding:"12px",marginTop:"10px",borderRadius:"8px"}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#4ade80",fontWeight:"bold"}}>{g.tip}</span><span style={{background:"#4ade80",color:"black",padding:"2px 10px",borderRadius:"10px",fontSize:"12px",fontWeight:"bold"}}>{g.conf}%</span></div><p style={{fontSize:"11px",color:"#888",margin:"6px 0 0 0"}}>{g.reason}</p></div>}
</div>
})}
</div>
<a href="https://wa.me/254793921100?text=Hi%20MESSIH!%20Nataka%20Jackpot%20tips" target="_blank" style={{position:"fixed",bottom:"20px",right:"20px",background:"#25D366",color:"white",width:"55px",height:"55px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"28px",textDecoration:"none",boxShadow:"0 4px 15px rgba(37,211,102,0.4)",zIndex:90}}>💬</a>
<p style={{textAlign:"center",color:"#444",fontSize:"10px",marginTop:"30px"}}>© 2026 MESSIH MatchAnalytics - Eldoret, Kenya<br/>Till 1581046 | WhatsApp 0793921100</p>
</div>
)}
