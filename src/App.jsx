export default function App(){
const [vip,setVip]=useState(false);
const [show,setShow]=useState(false);
const [code,setCode]=useState("");
const games=[
{id:1,league:"Premier League",home:"Arsenal",away:"Man City",tip:"Over 1.5 Goals",conf:77,isJack:true},
{id:2,league:"Champions League",home:"Real Madrid",away:"Man City",tip:"BTTS Yes",conf:88,isJack:true},
{id:3,league:"KPL",home:"Gor Mahia",away:"Tusker",tip:"Home Win",conf:75,isJack:false},
];
return(
<div style={{background:"black",color:"white",padding:"20px",minHeight:"100vh"}}>
<h1 style={{textAlign:"center"}}>MESSIH <span style={{color:"#4ade80"}}>MatchAnalytics</span></h1>
<div style={{textAlign:"center",margin:"20px"}}>
{!vip?<button onClick={()=>setShow(true)} style={{background:"#4ade80",color:"black",padding:"10px 20px",borderRadius:"20px",fontWeight:"bold"}}>Unlock JACKPOT VIP - 350 KSH</button>:<span style={{background:"gold",color:"black",padding:"5px 10px",borderRadius:"10px"}}>VIP UNLOCKED</span>}
</div>
{show&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.9)",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}}>
<div style={{background:"#111",border:"1px solid #4ade80",padding:"20px",borderRadius:"15px",maxWidth:"300px",width:"100%"}}>
<h2 style={{textAlign:"center"}}>Lipa na M-Pesa</h2>
<div style={{background:"white",color:"black",padding:"15px",textAlign:"center",borderRadius:"10px",margin:"15px 0"}}>
<p>Buy Goods Till</p><p style={{fontSize:"30px",fontWeight:"900",color:"green"}}>1581046</p><p>Amount: 350 KSH</p>
</div>
<input value={code} onChange={e=>setCode(e.target.value)} placeholder="M-Pesa Code" style={{width:"100%",padding:"10px",marginBottom:"10px",background:"black",color:"white",border:"1px solid gray"}}/>
<button onClick={()=>{if(code.length>5){setVip(true);setShow(false);alert("VIP Unlocked!")}else{alert("Enter code")}}} style={{width:"100%",background:"#4ade80",color:"black",padding:"10px",fontWeight:"bold"}}>Verify</button>
<button onClick={()=>setShow(false)} style={{width:"100%",marginTop:"10px",color:"gray"}}>Cancel</button>
</div></div>}
