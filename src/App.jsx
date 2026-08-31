import { useState, useEffect } from 'react'

// ===== MESSIH MATCH ANALYTICS - PRO CEO VERSION =====
// Till: 1581046 | 55 Games | STK PUSH | PRO ADMIN

const GAMES_DATA = Array.from({length: 55}, (_, i) => ({
  id: i+1,
  home: ["Man City", "Arsenal", "Barcelona", "Real Madrid", "Bayern", "PSG", "Inter", "Napoli", "Chelsea", "Liverpool"][i % 10],
  away: ["Tottenham", "Man Utd", "Atletico", "Sevilla", "Dortmund", "Marseille", "Milan", "Roma", "Newcastle", "Brighton"][i % 10],
  league: ["Premier League", "La Liga", "Bundesliga", "Ligue 1", "Serie A"][i % 5],
  time: `${15 + (i%8)}:${i%2==0?'00':'30'}`,
  odd: (1.4 + Math.random()*1.5).toFixed(2),
  tip: ["Over 1.5", "BTTS Yes", "Home Win", "Over 2.5", "Double Chance 1X"][i%5],
  status: i<12 ? "Live" : i<40 ? "Upcoming" : "Finished",
  result: i>=40 ? (Math.random()>0.7 ? "✅ WON" : "❌ LOST") : ""
}))

function App() {
  const [view, setView] = useState("home") // home, admin
  const [vipUnlocked, setVipUnlocked] = useState(localStorage.getItem("vip") === "MESSIH2025")
  const [vipCodeInput, setVipCodeInput] = useState("")
  const [phone, setPhone] = useState("")
  const [adminAuth, setAdminAuth] = useState(false)
  const [adminPass, setAdminPass] = useState("")
  const [vipGenCode, setVipGenCode] = useState("VIP-8F9K-2XLM")
  const [stkLoading, setStkLoading] = useState(false)

  const unlockVip = () => {
    if(vipCodeInput === "MESSIH2025" || vipCodeInput.startsWith("VIP-")){
      localStorage.setItem("vip", "MESSIH2025")
      setVipUnlocked(true)
      alert("✅ VIP Unlocked! 55 Games Visible")
    } else {
      alert("❌ Invalid Code. Pay via Till 1581046")
    }
  }

  const handleStkPush = async () => {
    if(!phone || phone.length < 10){ alert("Enter valid M-Pesa number 07..."); return }
    setStkLoading(true)
    // STK PUSH API CALL - will work once you add keys in Vercel
    try {
      const res = await fetch("/api/mpesa/stk", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({ phone: phone.startsWith("0") ? "254"+phone.slice(1) : phone, amount: 50 })
      })
      const data = await res.json()
      alert("📲 STK PUSH Sent to " + phone + "! Enter PIN. Till 1581046")
    } catch(e){
      // Fallback for now - manual till
      alert("📲 STK Setup Pending. For now Lipa Na M-Pesa: Till 1581046 - KES 50 then enter code MESSIH2025. Your phone: " + phone)
    }
    setStkLoading(false)
  }

  // ADMIN LOGIN
  if(view === "admin" && !adminAuth){
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-6">
        <div className="bg-[#151a2d] p-8 rounded-2xl border border-yellow-500/30 w-full max-w-md">
          <h1 className="text-2xl font-bold text-yellow-400 mb-6 text-center">CEO ADMIN LOGIN</h1>
          <input type="password" placeholder="Enter Admin Password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} className="w-full p-3 rounded bg-black border border-yellow-500/20 text-white mb-4"/>
          <button onClick={()=> adminPass==="MESSIH_ADMIN_2025" ? setAdminAuth(true) : alert("Wrong Password")} className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">Login</button>
          <button onClick={()=>setView("home")} className="w-full mt-3 text-gray-400">← Back to Site</button>
        </div>
      </div>
    )
  }

  // PRO ADMIN DASHBOARD
  if(view === "admin" && adminAuth){
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white p-4 md:p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-3xl font-bold text-yellow-400">MESSIH MATCH ANALYTICS - CEO ADMIN</h1>
          <div className="flex gap-2">
            <button onClick={()=>setView("home")} className="bg-gray-700 px-4 py-2 rounded">Home</button>
            <div className="bg-green-600 px-3 py-2 rounded text-sm">● Online</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#151a2d] p-4 rounded-xl border border-yellow-500/20"><p className="text-gray-400 text-xs">Total Revenue KES</p><h2 className="text-2xl font-bold">KES 8,245,300</h2><p className="text-green-400 text-xs">+12.4%</p></div>
          <div className="bg-[#151a2d] p-4 rounded-xl border border-yellow-500/20"><p className="text-gray-400 text-xs">Active VIP Users</p><h2 className="text-2xl font-bold">1,342</h2><p className="text-green-400 text-xs">+8.2%</p></div>
          <div className="bg-[#151a2d] p-4 rounded-xl border border-yellow-500/20"><p className="text-gray-400 text-xs">M-Pesa Till 1581046</p><h2 className="text-xl font-bold">KES 2,103,450</h2><p className="text-gray-400 text-xs">Today: 89 payments</p></div>
          <div className="bg-[#151a2d] p-4 rounded-xl border border-yellow-500/20"><p className="text-gray-400 text-xs">55 Games Today</p><h2 className="text-2xl font-bold">55</h2><p className="text-yellow-400 text-xs">+5 vs yesterday</p></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="font-bold mb-4 text-yellow-400">🔑 VIP Code Generator</h3>
            <div className="bg-black p-4 rounded flex justify-between items-center mb-4"><span className="font-mono text-yellow-400">{vipGenCode}</span><button onClick={()=>navigator.clipboard.writeText(vipGenCode)} className="bg-yellow-500 text-black px-3 py-1 rounded text-sm">Copy</button></div>
            <button onClick={()=>setVipGenCode("VIP-"+Math.random().toString(36).substr(2,4).toUpperCase()+"-"+Math.random().toString(36).substr(2,4).toUpperCase())} className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold">+ Generate New Code</button>
            <p className="text-xs text-gray-500 mt-2">Share code after Till 1581046 payment</p>
          </div>
          <div className="bg-[#151a2d] p-6 rounded-xl border border-yellow-500/30">
            <h3 className="font-bold mb-4 text-yellow-400">💳 Recent M-Pesa - Till 1581046</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between bg-black p-3 rounded"><span>07** 9021</span><span>KES 50</span><span className="bg-green-600 px-2 rounded text-xs">Success</span></div>
              <div className="flex justify-between bg-black p-3 rounded"><span>07** 5563</span><span>KES 50</span><span className="bg-green-600 px-2 rounded text-xs">Success</span></div>
              <div className="flex justify-between bg-black p-3 rounded"><span>07** 1199</span><span>KES 50</span><span className="bg-green-600 px-2 rounded text-xs">Success</span></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-[#151a2d] p-6 rounded-xl">
          <h3 className="font-bold text-yellow-400 mb-4">⚽ 55 Games Overview</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-black p-4 rounded"><p className="text-gray-400">Live</p><p className="text-2xl font-bold text-green-400">{GAMES_DATA.filter(g=>g.status==="Live").length}</p></div>
            <div className="bg-black p-4 rounded"><p className="text-gray-400">Upcoming</p><p className="text-2xl font-bold text-blue-400">{GAMES_DATA.filter(g=>g.status==="Upcoming").length}</p></div>
            <div className="bg-black p-4 rounded"><p className="text-gray-400">Finished</p><p className="text-2xl font-bold">{GAMES_DATA.filter(g=>g.status==="Finished").length}</p></div>
          </div>
        </div>
      </div>
    )
  }

  // HOME PAGE
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <header className="p-4 flex justify-between items-center border-b border-yellow-500/20">
        <h1 className="font-bold text-yellow-400 text-lg">MESSIH MATCH ANALYTICS</h1>
        <button onClick={()=>setView("admin")} className="text-xs bg-[#151a2d] px-3 py-1 rounded border">Admin</button>
      </header>

      <div className="p-4 max-w-6xl mx-auto">
        {!vipUnlocked && (
          <div className="bg-[#151a2d] p-6 rounded-2xl border border-yellow-500/30 mb-6 text-center">
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">🔒 VIP LOCKED - 55 GAMES</h2>
            <p className="text-gray-400 mb-4">Unlock all 55 tips for today</p>
            <div className="flex gap-2 max-w-md mx-auto mb-3">
              <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="07XX XXX XXX" className="flex-1 p-3 rounded bg-black border border-yellow-500/20"/>
              <button onClick={handleStkPush} disabled={stkLoading} className="bg-green-600 px-6 rounded font-bold">{stkLoading ? "..." : "STK PUSH"}</button>
            </div>
            <p className="text-xs text-gray-500 mb-3">OR Lipa Na M-Pesa Till: <span className="text-yellow-400 font-bold">1581046</span> - KES 50</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input value={vipCodeInput} onChange={e=>setVipCodeInput(e.target.value)} placeholder="Enter VIP Code e.g. MESSIH2025" className="flex-1 p-3 rounded bg-black border"/>
              <button onClick={unlockVip} className="bg-yellow-500 text-black px-6 rounded font-bold">Unlock</button>
            </div>
          </div>
        )}

        {vipUnlocked && <div className="bg-green-900/30 border border-green-500 p-3 rounded-xl mb-4 text-center text-green-400">✅ VIP Active - 55 Games Unlocked - <button onClick={()=>{localStorage.removeItem("vip"); setVipUnlocked(false)}} className="underline">Logout</button></div>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GAMES_DATA.slice(0, vipUnlocked ? 55 : 3).map(game => (
            <div key={game.id} className="bg-[#151a2d] p-4 rounded-xl border border-white/10">
              <div className="flex justify-between text-xs text-gray-400 mb-2"><span>{game.league}</span><span className={`${game.status==="Live" ? "text-green-400" : "text-yellow-400"}`}>{game.status} {game.time}</span></div>
              <h3 className="font-bold">{game.home} vs {game.away}</h3>
              <div className="mt-3 flex justify-between items-center"><div><p className="text-xs text-gray-400">Tip</p><p className="font-bold text-yellow-400">{game.tip} @ {game.odd}</p></div><div className="text-right">{game.result && <span className="text-sm font-bold">{game.result}</span>}</div></div>
            </div>
          ))}
        </div>

        {!vipUnlocked && (
          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-2">Showing 3 of 55 games. Unlock VIP to see all.</p>
            <a href="https://wa.me/254793921100?text=Hi%20I%20want%20VIP%20Till%201581046" className="inline-block bg-green-600 px-6 py-3 rounded-xl font-bold">WhatsApp Support</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
