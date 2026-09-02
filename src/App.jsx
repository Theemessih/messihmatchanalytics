import { useState } from 'react'

const JACKPOT_GAMES = [
  { id: 1, match: "Man City vs Arsenal", home: "Man City", away: "Arsenal", pred_1x2: "1", dc: "1X", goals: "Over 1.5", btts: "Yes", confidence: "92%" },
  { id: 2, match: "Liverpool vs Chelsea", home: "Liverpool", away: "Chelsea", pred_1x2: "1", dc: "1X", goals: "Over 2.5", btts: "Yes", confidence: "88%" },
  { id: 3, match: "Barcelona vs Real Madrid", home: "Barcelona", away: "Real M.", pred_1x2: "X", dc: "1X", goals: "Over 2.5", btts: "Yes", confidence: "85%" },
  { id: 4, match: "Bayern vs Dortmund", home: "Bayern", away: "Dortmund", pred_1x2: "1", dc: "1X", goals: "Over 2.5", btts: "Yes", confidence: "90%" },
  { id: 5, match: "PSG vs Marseille", home: "PSG", away: "Marseille", pred_1x2: "1", dc: "1X", goals: "Over 1.5", btts: "Yes", confidence: "89%" },
  { id: 6, match: "Inter vs AC Milan", home: "Inter", away: "AC Milan", pred_1x2: "X2", dc: "X2", goals: "Under 3.5", btts: "Yes", confidence: "82%" },
  { id: 7, match: "Napoli vs Roma", home: "Napoli", away: "Roma", pred_1x2: "1X", dc: "1X", goals: "Over 1.5", btts: "Yes", confidence: "86%" },
  { id: 8, match: "Ajax vs PSV", home: "Ajax", away: "PSV", pred_1x2: "GG", dc: "1X", goals: "Over 2.5", btts: "Yes", confidence: "91%" },
  { id: 9, match: "Porto vs Benfica", home: "Porto", away: "Benfica", pred_1x2: "1", dc: "1X", goals: "Over 1.5", btts: "No", confidence: "84%" },
  { id: 10, match: "Celtic vs Rangers", home: "Celtic", away: "Rangers", pred_1x2: "1X", dc: "1X", goals: "Over 1.5", btts: "Yes", confidence: "87%" },
  { id: 11, match: "Galatasaray vs Fenerbahce", home: "Galatasaray", away: "Fener", pred_1x2: "1X", dc: "1X", goals: "Over 1.5", btts: "Yes", confidence: "83%" },
  { id: 12, match: "Al Ahly vs Zamalek", home: "Al Ahly", away: "Zamalek", pred_1x2: "1", dc: "1X", goals: "Under 2.5", btts: "No", confidence: "90%" },
  { id: 13, match: "Kaizer vs Pirates", home: "Kaizer", away: "Pirates", pred_1x2: "X", dc: "X2", goals: "Under 2.5", btts: "No", confidence: "78%" },
  { id: 14, match: "Wydad vs Raja", home: "Wydad", away: "Raja", pred_1x2: "1", dc: "1X", goals: "Under 3.5", btts: "No", confidence: "81%" },
  { id: 15, match: "Esperance vs Etoile", home: "Esperance", away: "Etoile", pred_1x2: "1X", dc: "1X", goals: "Under 2.5", btts: "No", confidence: "86%" },
  { id: 16, match: "Simba vs Yanga", home: "Simba", away: "Yanga", pred_1x2: "GG", dc: "X2", goals: "Over 1.5", btts: "Yes", confidence: "88%" },
  { id: 17, match: "Gor Mahia vs AFC Leopards", home: "Gor Mahia", away: "AFC", pred_1x2: "1", dc: "1X", goals: "Over 1.5", btts: "No", confidence: "93%" },
]

export default function App(){
  const [view, setView] = useState("home")
  const [adminAuth, setAdminAuth] = useState(false)
  const [adminPass, setAdminPass] = useState("")
  const [vipGen, setVipGen] = useState("VIP-8F9K-2XLM")

  if(view==="admin" &&!adminAuth){
    return (
      <div className="min-h-screen bg-[#080a14] flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl">
          <h1 className="font-black text-center text-xl mb-6">MESSIH CEO PORTAL - Till 1581046</h1>
          <input type="password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} placeholder="Password" className="w-full border-2 p-3 rounded-xl mb-3"/>
          <button onClick={()=> adminPass==="MESSIH_ADMIN_2025"? setAdminAuth(true) : alert("Wrong")} className="w-full bg-yellow-500 text-black py-3 rounded-xl font-black">UNLOCK</button>
          <button onClick={()=>setView("home")} className="w-full mt-3 text-gray-400 text-sm">Back</button>
        </div>
      </div>
    )
  }

  if(view==="admin" && adminAuth){
    return (
      <div className="min-h-screen bg-[#070a14] text-white p-6">
        <div className="flex justify-between mb-6"><h1 className="text-yellow-400 font-black text-xl">MESSIH - CEO ADMIN - Till 1581046</h1><button onClick={()=>setView("home")} className="bg-white/10 px-4 py-1 rounded">Home</button></div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-[#151a2d] p-4 rounded-xl"><p className="text-xs text-gray-400">Revenue</p><h2 className="text-xl font-bold">KES 8,245,300</h2></div>
          <div className="bg-[#151a2d] p-4 rounded-xl"><p className="text-xs text-gray-400">VIP Users</p><h2 className="text-xl font-bold">1,342</h2></div>
          <div className="bg-yellow-500 text-black p-4 rounded-xl"><p className="text-xs font-bold">Till Today</p><h2 className="text-xl font-black">KES 184,200</h2></div>
          <div className="bg-[#151a2d] p-4 rounded-xl"><p className="text-xs text-gray-400">Games</p><h2 className="text-xl font-bold">17 Jackpot</h2></div>
        </div>
        <div className="bg-[#10132a] p-6 rounded-2xl max-w-md"><h3 className="text-yellow-400 font-bold mb-3">🔑 VIP Generator</h3><div className="bg-black p-3 rounded flex justify-between mb-3"><span className="font-mono text-yellow-400">{vipGen}</span><button onClick={()=>navigator.clipboard.writeText(vipGen)} className="bg-yellow-500 text-black px-3 rounded text-xs">Copy</button></div><button onClick={()=>setVipGen("VIP-"+Math.random().toString(36).substr(2,4).toUpperCase()+"-"+Math.random().toString(36).substr(2,4).toUpperCase())} className="w-full bg-yellow-500 text-black py-2 rounded font-bold">Generate</button></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto p-3 md:p-6">
        <header className="bg-white border-2 border-black p-4 rounded-xl flex justify-between items-center mb-4">
          <div><h1 className="font-black text-lg md:text-2xl text-green-700 leading-none">MESSIH MATCH ANALYTICS</h1><p className="text-[10px] text-gray-500 mt-1">17 JACKPOT GAMES • FULL ANALYSIS</p></div>
          <button onClick={()=>setView("admin")} className="text-xs border-2 border-black px-4 py-2 rounded-full font-bold">CEO LOGIN</button>
        </header>

        <div className="bg-white border border-gray-300 rounded-xl p-4 mb-4 text-sm">You can find sure and accurate predictions for today, including 17 SportPesa Mega Jackpot games. Full analysis with 1X2, Double Chance, Goals & BTTS.</div>

        <div className="bg-white border-2 border-black rounded-xl overflow-hidden mb-6">
          <div className="bg-[#1a2332] text-white p-3 flex justify-between items-center">
            <h3 className="font-black text-sm">🔥 SPORTPESA MEGA JACKPOT - FULL PREDICTION TABLE</h3>
            <span className="bg-yellow-400 text-black text-[10px] px-2 py-1 rounded-full font-black">17 GAMES</span>
          </div>

          {/* Desktop Table */}
          <div className="overflow-x-auto hidden md:block">
            <table className="w-full text-[12px]">
              <thead className="bg-gray-100 border-b-2 border-black">
                <tr className="font-black">
                  <th className="p-2.5 text-left w-8">#</th>
                  <th className="p-2.5 text-left">Match</th>
                  <th className="p-2.5 text-center bg-blue-50">1X2</th>
                  <th className="p-2.5 text-center bg-purple-50">Double Chance</th>
                  <th className="p-2.5 text-center bg-green-50">Over/Under</th>
                  <th className="p-2.5 text-center bg-orange-50">BTTS</th>
                  <th className="p-2.5 text-center bg-yellow-50">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {JACKPOT_GAMES.map(g=>(
                  <tr key={g.id} className="border-b hover:bg-yellow-50">
                    <td className="p-2.5 font-bold text-center">{g.id}</td>
                    <td className="p-2.5 font-medium">{g.match}</td>
                    <td className="p-2.5 text-center"><span className="bg-blue-600 text-white px-2.5 py-1 rounded-full font-black">{g.pred_1x2}</span></td>
                    <td className="p-2.5 text-center"><span className="bg-purple-600 text-white px-2.5 py-1 rounded-full font-bold">{g.dc}</span></td>
                    <td className="p-2.5 text-center"><span className="bg-green-600 text-white px-2.5 py-1 rounded-full font-bold text-[11px]">{g.goals}</span></td>
                    <td className="p-2.5 text-center"><span className={`px-2.5 py-1 rounded-full font-bold text-[11px] ${g.btts==="Yes"?"bg-orange-500 text-white":"bg-gray-300 text-black"}`}>{g.btts}</span></td>
                    <td className="p-2.5 text-center"><span className="bg-yellow-400 text-black px-2 py-1 rounded-full font-black text-[10px]">{g.confidence}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y">
            {JACKPOT_GAMES.map(g=>(
              <div key={g.id} className="p-3">
                <div className="flex justify-between mb-2"><span className="font-black text-xs bg-black text-white px-2 py-0.5 rounded">#{g.id}</span><span className="text-[10px] bg-yellow-400 px
