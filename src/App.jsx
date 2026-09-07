import { useState } from 'react'

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

export default function App(){
  const [view, setView] = useState("home")
  const [adminAuth, setAdminAuth] = useState(false)
  const [adminPass, setAdminPass] = useState("")
  const [vipGen, setVipGen] = useState("VIP-8F9K-2XLM")

  // ADMIN LOGIN
  if(view==="admin" &&!adminAuth){
    return (
      <div className="min-h-screen bg-[#080a14] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl border border-yellow-500/20">
          <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">👑</div>
          <h1 className="font-black text-center text-xl mb-1">MESSIH CEO PORTAL</h1>
          <p className="text-center text-xs text-gray-500 mb-6">Till 1581046 • Secure Access</p>
          <input type="password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} placeholder="CEO Password" className="w-full border-2 border-gray-100 focus:border-yellow-500 p-3 rounded-xl mb-3 outline-none"/>
          <button onClick={()=> adminPass==="MESSIH_ADMIN_2025"? setAdminAuth(true) : alert("Wrong Password!")} className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-3 rounded-xl font-black shadow">UNLOCK DASHBOARD</button>
          <button onClick={()=>setView("home")} className="w-full mt-3 text-gray-400 text-sm">← Back to Site</button>
        </div>
      </div>
    )
  }

  // PRO ADMIN DASHBOARD
  if(view==="admin" && adminAuth){
    return (
      <div className="min-h-screen bg-[#070a14] text-white">
        {/* Top Bar */}
        <div className="bg-[#0f1222] border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center font-black text-black">M</div>
            <div><h1 className="font-black text-sm tracking-widest">MESSIH ANALYTICS</h1><p className="text-[10px] text-gray-400">CEO • TILL 1581046 • LIVE</p></div>
          </div>
          <div className="flex gap-2">
            <span className="bg-green-500/20 text-green-400 text-[10px] px-3 py-1 rounded-full border border-green-500/30">● SYSTEM LIVE</span>
            <button onClick={()=>setView("home")} className="bg-white/10 px-3 py-1 rounded-full text-xs">Logout</button>
          </div>
        </div>

        <div className="p-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-black mb-1">Welcome back, CEO 👑</h2>
          <p className="text-sm text-gray-400 mb-6">Here's what's happening with your jackpot business today.</p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-[#1a1f3d] to-[#12152e] border border-white/10 p-5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl"></div>
              <p className="text-[10px] tracking-widest text-gray-400">TOTAL REVENUE</p>
              <h3 className="text-2xl font-black mt-2">KES 8,245,300</h3>
              <p className="text-[11px] text-green-400 mt-1">↑ 12.5% vs last week</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f3d] to-[#12152e] border border-white/10 p-5 rounded-2xl">
              <p className="text-[10px] tracking-widest text-gray-400">VIP ACTIVE USERS</p>
              <h3 className="text-2xl font-black mt-2">1,342</h3>
              <p className="text-[11px] text-green-400 mt-1">↑ 89 new today</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-amber-600 text-black p-5 rounded-2xl">
              <p className="text-[10px] tracking-widest opacity-70 font-bold">TILL 1581046 TODAY</p>
              <h3 className="text-2xl font-black mt-2">KES 184,200</h3>
              <p className="text-[11px] opacity-80 mt-1">● 47 M-Pesa transactions</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1f3d] to-[#12152e] border border-white/10 p-5 rounded-2xl">
              <p className="text-[10px] tracking-widest text-gray-400">JACKPOT GAMES</p>
              <h3 className="text-2xl font-black mt-2">17 Games</h3>
              <p className="text-[11px] text-yellow-400 mt-1">Active • Sportpesa Mega</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* VIP Generator */}
            <div className="bg-[#10132a] border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold text-yellow-400 mb-4 flex items-center gap-2">🔑 VIP Code Engine</h3>
              <div className="bg-black rounded-xl p-4 flex justify-between items-center border border-yellow-500/20 mb-4">
                <span className="font-mono text-yellow-400 font-bold tracking-widest">{vipGen}</span>
                <button onClick={()=>navigator.clipboard.writeText(vipGen)} className="bg-white text-black text-xs px-3 py-1 rounded-full font-bold">COPY</button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={()=>setVipGen("VIP-"+Math.random().toString(36).substr(2,4).toUpperCase()+"-"+Math.random().toString(36).substr(2,4).toUpperCase())} className="bg-yellow-500 text-black py-2.5 rounded-xl font-black text-sm">GENERATE</button>
                <a href={`https://wa.me/254793921100?text=Your VIP Code: ${vipGen}`} target="_blank" className="bg-green-600 text-white py-2.5 rounded-xl font-bold text-sm text-center">SEND WA</a>
              </div>
              <div className="mt-4 bg-white/5 p-3 rounded-xl text-xs">
                <p className="text-gray-400">Recent Sales</p>
                <div className="mt-2 space-y-1"><p>• 0793***100 paid KES 350 - VIP-A9X1</p><p>• 0721***450 paid KES 100 - VIP-B2K8</p><p>• 0710***233 paid KES 700 - VIP-MONTH</p></div>
              </div>
            </div>

            {/* Revenue Chart Mock */}
            <div className="bg-[#10132a] border border-white/10 rounded-2xl p-6 md:col-span-2">
              <h3 className="font-bold mb-4">📈 M-Pesa Revenue - Last 7 Days</h3>
              <div className="flex items-end gap-2 h-32 mb-3">
                {[40,65,45,90,70,85,100].map((h,i)=>(<div key={i} className="flex-1 bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-t" style={{height: `${h}%`}}></div>))}
              </div>
              <div className="flex justify-between text-[10px] text-gray-500"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Today</span></div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                <div className="bg-black/50 p-3 rounded-xl"><p className="text-gray-400">Best Plan</p><p className="font-bold text-yellow-400 mt-1">KES 350 - 6 Versions</p></div>
                <div className="bg-black/50 p-3 rounded-xl"><p className="text-gray-400">Conversion</p><p className="font-bold mt-1">68% Win Rate</p></div>
                <div className="bg-black/50 p-3 rounded-xl"><p className="text-gray-400">Helpline</p><p className="font-bold text-green-400 mt-1">0793921100</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // HOME - BETTINGTIPS STYLE
  return (
    <div className="min-h-screen bg-white text-black max-w-3xl mx-auto p-4 font-sans">
      <header className="flex justify-between items-center border-b pb-3 mb-4">
        <h1 className="font-extrabold text-xl text-green-700">MESSIH MATCH ANALYTICS</h1>
        <button onClick={()=>setView("admin")} className="text-xs border px-3 py-1 rounded-full bg-gray-50">Admin</button>
      </header>

      <p className="text-[15px] leading-6 mb-4">You can find sure and accurate predictions for today, tomorrow, and the weekend, including this week's 17 SportPesa Mega Jackpot games.</p>
      <h2 className="font-bold underline mb-3">This week Mega Jackpot Pro Prizes:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[15px]">
        <li><b>MEGA Jackpot Pro 17</b> — KSH 132,184,625</li>
        <li><b>MEGA Jackpot Pro 16</b> — KSH 132,619,806</li>
        <li><b>MEGA Jackpot Pro 15</b> — KSH 100,578,428</li>
        <li><b>MEGA Jackpot Pro 14</b> — KSH 33,591,398</li>
        <li><b>MEGA Jackpot Pro 13</b> — KSH 15,617,580</li>
      </ul>

      <h3 className="font-bold text-center mb-3">Free SportPesa Mega Jackpot Predictions</h3>
      <div className="border-2 border-gray-800 mb-6 overflow-hidden">
        <div className="grid grid-cols-[40px_1fr_90px] bg-[#2c3e50] text-white font-bold text-sm">
          <div className="p-2"></div><div className="p-2 border-l border-white/20">Match</div><div className="p-2 border-l border-white/20">Tip</div>
        </div>
        {JACKPOT_GAMES.map(g=>(
          <div key={g.id} className="grid grid-cols-[40px_1fr_90px] border-t text-[13px]">
            <div className="p-2 text-center border-r">{g.id}</div>
            <div className="p-2 border-r">{g.match}</div>
            <div className="p-2 font-bold text-blue-600">{g.tip}</div>
          </div>
        ))}
      </div>

      <ul className="list-disc pl-6 space-y-2 text-[15px] mb-8">
        <li className="font-bold underline text-red-600">PREMIUM SUBSCRIPTION PLANS FOR JACKPOTS</li>
        <li>Pay <span className="font-bold text-blue-600">100/-</span>-<span className="text-blue-600"> 100% sure multibet (12.00 odds)</span></li>
        <li>Pay <span className="font-bold text-red-600">350/-</span>-<span className="text-blue-600"> 6 versions of Sportpesa</span></li>
        <li>Pay <span className="font-bold text-red-600">250/-</span>-<span className="text-blue-600"> sportpesa pro (100% Bonus)</span></li>
        <li>Pay <span className="font-bold text-red-600">140/-</span>-<span className="text-blue-600"> Sportpesa mega (3 version)</span></li>
        <li>Pay <span className="font-bold text-red-600">130/-</span>-<span className="text-blue-600"> 13/13 pro (100% sure Bonus)</span></li>
        <li>Pay <span className="font-bold text-blue-600">95/-</span>-<span className="text-blue-600"> Betika midweek (6 version)</span></li>
        <li>Pay <span className="font-bold text-blue-600">700/-</span>-<span className="text-blue-600"> 1 months subscriptions.</span></li>
        <li className="font-bold"><span className="text-green-700 underline">MPESA TILL:</span><span className="text-green-700"> 1581046</span><span className="text-red-600">(Buy goods)</span></li>
        <li className="font-bold"><span className="text-green-700 underline">HELPLINE:</span><span className="text-red-600"> 0793921100</span><span className="text-red-600"> [for clarifications]</span></li>
      </ul>

      <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-xl text-center">
        <h3 className="font-bold text-lg mb-2">🔓 Unlock 6 Versions - KES 350 Only</h3>
        <p className="text-sm mb-3">Lipa Na M-Pesa Till 1581046 then get VIP code</p>
        <a href="https://wa.me/254793921100?text=Hi%20Messih%20I%20paid%20to%20Till%201581046%20for%20Jackpot%20KES%20350" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full font-bold">Pay via WhatsApp</a>
      </div>

      <footer className="mt-10 text-center text-xs text-gray-500 border-t pt-4">Messih Match Analytics - Till 1581046</footer>
    </div>
  )
}
