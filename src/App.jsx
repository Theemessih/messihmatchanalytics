import { useState } from 'react'

const JACKPOT_PRIZES = [
  { name: "MEGA Jackpot Pro 17", amount: "KSH 132,184,625" },
  { name: "MEGA Jackpot Pro 16", amount: "KSH 132,619,806" },
  { name: "MEGA Jackpot Pro 15", amount: "KSH 100,578,428" },
  { name: "MEGA Jackpot Pro 14", amount: "KSH 33,591,398" },
  { name: "MEGA Jackpot Pro 13", amount: "KSH 15,617,580" },
]

const JACKPOT_GAMES = [
  { id: 1, match: "Man City vs Arsenal", tip: "1" },
  { id: 2, match: "Liverpool vs Chelsea", tip: "1X" },
  { id: 3, match: "Barcelona vs Real Madrid", tip: "GG" },
  { id: 4, match: "Bayern vs Dortmund", tip: "Over 2.5" },
  { id: 5, match: "PSG vs Marseille", tip: "1" },
  { id: 6, match: "Inter vs AC Milan", tip: "X2" },
  { id: 7, match: "Napoli vs Roma", tip: "1X" },
  { id: 8, match: "Ajax vs PSV", tip: "GG" },
  { id: 9, match: "Porto vs Benfica", tip: "1" },
  { id: 10, match: "Celtic vs Rangers", tip: "Over 1.5" },
  { id: 11, match: "Galatasaray vs Fenerbahce", tip: "1X" },
  { id: 12, match: "Al Ahly vs Zamalek", tip: "Under 3.5" },
  { id: 13, match: "Kaizer vs Pirates", tip: "X" },
  { id: 14, match: "Wydad vs Raja", tip: "1" },
  { id: 15, match: "Esperance vs Etoile", tip: "1X" },
  { id: 16, match: "Simba vs Yanga", tip: "GG" },
  { id: 17, match: "Gor Mahia vs AFC Leopards", tip: "1" },
]

const PLANS = [
  { price: "100/-", desc: "100% sure multibet (12.00 odds)", color: "text-blue-600" },
  { price: "350/-", desc: "6 versions of Sportpesa", color: "text-red-600" },
  { price: "250/-", desc: "sportpesa pro (100% Bonus)", color: "text-red-600" },
  { price: "140/-", desc: "Sportpesa mega (3 version)", color: "text-red-600" },
  { price: "130/-", desc: "13/13 pro (100% sure Bonus)", color: "text-red-600" },
  { price: "95/-", desc: "Betika midweek (6 version)", color: "text-blue-600" },
  { price: "700/-", desc: "1 months subscriptions.", color: "text-blue-600" },
]

export default function App(){
  const [view, setView] = useState("home")
  const [adminAuth, setAdminAuth] = useState(false)
  const [adminPass, setAdminPass] = useState("")
  const [vipGen, setVipGen] = useState("VIP-8F9K-2XLM")

  if(view==="admin" &&!adminAuth){
    return (
      <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-xl max-w-md w-full shadow">
          <h1 className="font-bold text-center mb-4">CEO ADMIN LOGIN</h1>
          <input type="password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} placeholder="Password" className="w-full border p-3 rounded mb-3"/>
          <button onClick={()=> adminPass==="MESSIH_ADMIN_2025"? setAdminAuth(true) : alert("Wrong")} className="w-full bg-yellow-500 py-3 rounded font-bold">Login</button>
          <button onClick={()=>setView("home")} className="w-full mt-2 text-gray-500">Back</button>
        </div>
      </div>
    )
  }

  if(view==="admin" && adminAuth){
    return (
      <div className="min-h-screen bg-[#0a0e1a] text-white p-6">
        <h1 className="text-2xl font-bold text-yellow-400 mb-6">MESSIH - CEO ADMIN - Till 1581046</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#151a2d] p-4 rounded"><p className="text-xs">Revenue</p><h2 className="text-xl font-bold">KES 8,245,300</h2></div>
          <div className="bg-[#151a2d] p-4 rounded"><p className="text-xs">VIP Users</p><h2 className="text-xl font-bold">1,342</h2></div>
          <div className="bg-[#151a2d] p-4 rounded"><p className="text-xs">Till 1581046 Today</p><h2 className="text-xl font-bold">KES 184,200</h2></div>
          <div className="bg-[#151a2d] p-4 rounded"><p className="text-xs">Games</p><h2 className="text-xl font-bold">17 Jackpot</h2></div>
        </div>
        <div className="bg-[#151a2d] p-6 rounded-xl">
          <h3 className="text-yellow-400 font-bold mb-3">🔑 VIP Code Generator</h3>
          <div className="bg-black p-3 rounded flex justify-between mb-3"><span className="font-mono text-yellow-400">{vipGen}</span><button onClick={()=>navigator.clipboard.writeText(vipGen)} className="bg-yellow-500 text-black px-3 rounded">Copy</button></div>
          <button onClick={()=>setVipGen("VIP-"+Math.random().toString(36).substr(2,4).toUpperCase()+"-"+Math.random().toString(36).substr(2,4).toUpperCase())} className="w-full bg-yellow-500 text-black py-2 rounded font-bold">Generate</button>
        </div>
        <button onClick={()=>setView("home")} className="mt-6 bg-gray-700 px-4 py-2 rounded">Back Home</button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-black max-w-3xl mx-auto p-4">
      <header className="flex justify-between items-center border-b pb-3 mb-4">
        <h1 className="font-extrabold text-xl text-green-700">MESSIH MATCH ANALYTICS</h1>
        <button onClick={()=>setView("admin")} className="text-xs border px-3 py-1 rounded">Admin</button>
      </header>

      <p className="text-[15px] leading-6 mb-4">
        You can find sure and accurate predictions for today, tomorrow, and the weekend, including this week's 17 SportPesa Mega Jackpot games. These predictions are based on team form and head-to-head results to provide well-analyzed outcomes.
      </p>

      <h2 className="font-bold underline mb-3">This week Mega Jackpot Pro Prizes:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[15px]">
        {JACKPOT_PRIZES.map((p,i)=>(
          <li key={i}><span className="font-bold">{p.name}</span> — {p.amount}</li>
        ))}
      </ul>

      <h3 className="font-bold text-center mb-3">Free SportPesa Mega Jackpot Predictions</h3>
      <div className="border-2 border-gray-800 mb-6 overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_80px] bg-[#2c3e50] text-white font-bold text-sm">
          <div className="p-2 border-r"></div><div className="p-2 border-r">Match</div><div className="p-2">Tip</div>
        </div>
        {JACKPOT_GAMES.map(g=>(
          <div key={g.id} className="grid grid-cols-[50px_1fr_80px] border-t text-sm">
            <div className="p-2 border-r text-center">{g.id}</div>
            <div className="p-2 border-r">{g.match}</div>
            <div className="p-2 font-bold text-green-700">{g.tip}</div>
          </div>
        ))}
      </div>

      <ul className="list-disc pl-6 space-y-2 text-[15px] mb-8">
        <li className="font-bold underline text-red-600">PREMIUM SUBSCRIPTION PLANS FOR JACKPOTS</li>
        {PLANS.map((plan,i)=>(
          <li key={i}>Pay <span className={`font-bold ${plan.color}`}>{plan.price}</span>-<span className="text-blue-600"> {plan.desc}</span></li>
        ))}
        <li className="font-bold"><span className="text-green-700 underline">MPESA TILL:</span><span className="text-green-700">1581046</span><span className="text-red-600">(Buy goods)</span></li>
        <li className="font-bold"><span className="text-green-700 underline">HELPLINE:</span><span className="text-red-600">0793921100</span><span className="text-red-600">[for clarifications]</span></li>
      </ul>

      <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-xl text-center">
        <h3 className="font-bold text-lg mb-2">🔓 Unlock 6 Versions - KES 350 Only</h3>
        <p className="text-sm mb-3">Lipa Na M-Pesa Till 1581046 then WhatsApp code</p>
        <a href="https://wa.me/254793921100?text=Hi%20Messih%20I%20paid%20to%20Till%201581046%20for%20Jackpot" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold">Pay via WhatsApp</a>
      </div>

      <footer className="mt-10 text-center text-xs text-gray-500 border-t pt-4">
        Messih Match Analytics - Till 1581046 - 2025/2026 Season
      </footer>
    </div>
  )
}
