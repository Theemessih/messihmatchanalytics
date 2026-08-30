:"1.80",time:"21:00"},
{id:34,league:"Europa",home:"Tottenham",away:"Ajax",tip:"BTTS Yes",odd:"1.72",time:"21:00"},
{id:35,league:"Other",home:"Galatasaray",away:"Fenerbahce",tip:"Over 2.5",odd:"1.75",time:"19:00"},
{id:36,league:"Jackpot",home:"Liverpool",away:"Chelsea",tip:"Home Win & Over 1.5",odd:"2.40",time:"17:30"},
{id:37,league:"Jackpot",home:"Atletico",away:"Sevilla",tip:"Home Win",odd:"1.85",time:"18:30"},
{id:38,league:"Jackpot",home:"Bayern",away:"Dortmund",tip:"Over 2.5",odd:"1.70",time:"19:30"},
{id:39,league:"Jackpot",home:"PSG",away:"Lyon",tip:"Home Win",odd:"1.55",time:"21:00"},
{id:40,league:"Jackpot",home:"Inter",away:"Juventus",tip:"BTTS Yes",odd:"1.80",time:"20:45"},
{id:41,league:"Jackpot",home:"Arsenal",away:"Tottenham",tip:"Over 2.5",odd:"1.82",time:"16:00"},
{id:42,league:"Jackpot",home:"Real Madrid",away:"Villarreal",tip:"Home Win",odd:"1.60",time:"21:00"},
{id:43,league:"Jackpot",home:"Man City",away:"Newcastle",tip:"Over 1.5",odd:"1.30",time:"16:00"},
{id:44,league:"Jackpot",home:"Napoli",away:"AC Milan",tip:"BTTS Yes",odd:"1.75",time:"20:45"},
{id:45,league:"Jackpot",home:"Bayer Leverkusen",away:"Stuttgart",tip:"Home Win",odd:"1.70",time:"19:30"},
{id:46,league:"Jackpot",home:"AFC Leopards",away:"Gor Mahia",tip:"Under 2.5",odd:"1.60",time:"15:00"},
{id:47,league:"Jackpot",home:"Simba",away:"Azam FC",tip:"Home Win",odd:"1.65",time:"18:00"},
{id:48,league:"Jackpot",home:"Al Ahly",away:"Zamalek",tip:"Home Win",odd:"1.80",time:"20:00"},
{id:49,league:"Jackpot",home:"Sundowns",away:"Kaizer Chiefs",tip:"Home Win",odd:"1.55",time:"17:00"},
{id:50,league:"Jackpot",home:"Raja",away:"Berkane",tip:"Under 2.5",odd:"1.50",time:"21:00"},
{id:51,league:"Jackpot",home:"Orlando Pirates",away:"Stellenbosch",tip:"Home Win",odd:"1.75",time:"16:00"},
{id:52,league:"Jackpot",home:"Yang SC",away:"Al Hilal",tip:"Over 1.5",odd:"1.45",time:"18:00"},
{id:53,league:"Jackpot",home:"Man Utd",away:"Brighton",tip:"Over 2.5",odd:"1.85",time:"16:00"},
{id:54,league:"Jackpot",home:"Chelsea",away:"West Ham",tip:"Home Win",odd:"1.70",time:"17:30"},
{id:55,league:"Jackpot",home:"Dortmund",away:"Frankfurt",tip:"Over 2.5",odd:"1.68",time:"16:30"},
];
const checkCode=()=>{if(code==="MESSIH2025"||code==="MESSIH"||code==="VIP55"){setVip(true);setShow(false);alert("VIP 55 GAMES UNLOCKED!");}else{alert("Wrong Code! Lipa Till 1581046");}};
return(
<div style={{background:"black",color:"white",padding:"20px",minHeight:"100vh",fontFamily:"Arial"}}>
<h1 style={{textAlign:"center"}}>MESSIH <span style={{color:"#4ade80"}}>MATCH ANALYTICS</span></h1>
<p style={{textAlign:"center",color:"#aaa"}}>55 Games Daily - Analysis Across All Sites</p>
<div style={{textAlign:"center",margin:"20px"}}>
{!vip?<button onClick={()=>setShow(true)} style={{background:"#4ade80",color:"black",padding:"15px 30px",fontWeight:"bold",border:"none",borderRadius:"8px",fontSize:"18px"}}>🔓 Unlock VIP - 55 Games (Till 1581046)</button>:<div style={{background:"#4ade80",color:"black",padding:"10px",borderRadius:"8px",fontWeight:"bold"}}>VIP 55 ACTIVE ✅</div>}
</div>
<div style={{display:"grid",gap:"10px"}}>{games.map(g=>(
<div key={g.id} style={{background:"#111",border:"1px solid #4ade80",padding:"12px",borderRadius:"8px",opacity:(g.league==="Jackpot"&&!vip)?0.5:1}}>
<div style={{display:"flex",justifyContent:"space-between",fontSize:"12px"}}><span style={{color:"#4ade80",fontWeight:"bold"}}>{g.league}</span><span>{g.time}</span><span style={{background:"#4ade80",color:"black",padding:"2px 8px",borderRadius:"4px"}}>{g.odd}</span></div>
<div style={{margin:"8px 0",fontWeight:"bold"}}>{g.home} vs {g.away}</div>
<div>Tip: <b style={{color:"#4ade80"}}>{(g.league==="Jackpot"&&!vip)?"🔒 VIP ONLY":g.tip}</b></div>
</div>))}</div>
<div style={{background:"#111",border:"1px solid #333",padding:"20px",marginTop:"30px",borderRadius:"8px",textAlign:"center"}}>
<p>WhatsApp: 0793921100</p>
<a href="https://wa.me/254793921100" target="_blank" style={{background:"#25D366",color:"white",padding:"12px 25px",borderRadius:"8px",textDecoration:"none",fontWeight:"bold",display:"inline-block",marginTop:"10px"}}>WhatsApp Us</a>
<p style={{marginTop:"10px",fontSize:"12px"}}>Till: 1581046</p>
</div>
{show&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.95)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",zIndex:1000}}>
<div style={{background:"#111",border:"1px solid #4ade80",padding:"25px",borderRadius:"12px",maxWidth:"400px",width:"100%",textAlign:"center"}}>
<h2>Lipa na M-Pesa</h2>
<div style={{background:"white",color:"black",padding:"15px",borderRadius:"8px",margin:"15px 0"}}><p>Buy Goods Till</p><p style={{fontSize:"32px",fontWeight:"900",color:"#4ade80"}}>1581046</p></div>
<input value={code} onChange={e=>setCode(e.target.value)} placeholder="VIP Code" style={{width:"100%",padding:"12px",borderRadius:"8px",border:"1px solid #4ade80",background:"black",color:"white"}}/>
<button onClick={checkCode} style={{width:"100%",background:"#4ade80",color:"black",padding:"12px",fontWeight:"bold",border:"none",borderRadius:"8px",marginTop:"15px"}}>Activate 55 Games</button>
<button onClick={()=>setShow(false)} style={{width:"100%",background:"transparent",color:"white",padding:"10px",marginTop:"10px",border:"1px solid #333",borderRadius:"8px"}}>Cancel</button>
</div></div>}
</div>);
}
