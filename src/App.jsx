import { useState } from 'react'
import './App.css'
function App() {
  const [active, setActive] = useState('all')
  const [search, setSearch] = useState('')
  const games = [
    { id: 1, league: "EPL", match: "Arsenal vs Man City", time: "Today 19:00", pred: "Over 1.5", conf: 92, odds: { betika: 1.28, sportpesa: 1.30, mozzart: 1.27 }, jp: true, tip: "Arsenal scored in 18/20 last games. Man City conceded in 8/10 away." },
    { id: 2, league: "LaLiga", match: "Barcelona vs Real Madrid", time: "Tomorrow 22:00", pred: "BTTS Yes", conf: 88, odds: { betika: 1.65, sportpesa: 1.70, mozzart: 1.68 }, jp: true, tip: "Both teams scored in last 5 Clasicos. High stakes game." },
    { id: 3, league: "KPL", match: "Gor Mahia vs Tusker", time: "Today 15:00", pred: "Home Win", conf: 75, odds: { betika: 2.10, sportpesa: 2.05, mozzart: 2.15 }, jp: false, tip: "Gor unbeaten at home 10 games. Tusker missing key striker." },
    { id: 4, league: "UCL", match: "PSG vs Bayern", time: "Wed 21:00", pred: "Over 2.5", conf: 85, odds: { betika: 1.75, sportpesa: 1.80, mozzart: 1.78 }, jp: true, tip: "Both attacking teams. Last 3 meetings went over 2.5" },
    { id: 5, league: "Serie A", match: "Inter vs Napoli", time: "Today 20:45", pred: "1X", conf: 80, odds: { betika: 1.35, sportpesa: 1.33, mozzart: 1.36 }, jp: true, tip: "Inter strong at home, Napoli poor away form" },
    { id: 6, league: "KPL", match: "AFC Leopards vs Shabana", time: "Tomorrow 14:00", pred: "Under 2.5", conf: 70, odds: { betika: 1.60, sportpesa: 1.62, mozzart: 1.58 }, jp: false, tip: "Both teams low scoring this season" },
  ]
  const filtered = games.filter(g => {
    const matchSearch = g.match.toLowerCase().includes(search.toLowerCase())
    const matchTab = active === 'jackpot' ? g.jp : true
    return matchSearch && matchTab
  })
  const bestOdds = (odds) => Math.max(...Object.values(odds))
  return (
    <div className="container">
      <header>
        <div className="logo">MESSIH<span>MatchAnalytics</span><div className="live">● LIVE</div></div>
        <p>Daily analysis across Betika, SportPesa, Mozzart, Odibets + Jackpots</p>
        <input className="search" placeholder="Search team e.g. Arsenal, Gor..." value={search} onChange={e=>setSearch(e.target.value)} />
        <div className="tabs">
          <button onClick={()=>setActive('all')} className={active==='all'?'active':''}>All Games ({games.length})</button>
          <button onClick={()=>setActive('jackpot')} className={active==='jackpot'?'active':''}>Jackpot ({games.filter(g=>g.jp).length})</button>
        </div>
      </header>
      <div className="grid">
        {filtered.map(g => (
          <div key={g.id} className="card">
            <div className="card-top">
              <span>{g.league}</span>
              {g.jp && <span className="jackpot">JACKPOT</span>}
              <span>{g.time}</span>
            </div>
            <h3>{g.match}</h3>
            <div className="prediction">
              <span>Tip: <b>{g.pred}</b></span>
              <span className="conf" style={{background: g.conf>85?'#00c853':'#ffab00'}}>{g.conf}%</span>
            </div>
            <p className="analysis">{g.tip}</p>
            <div className="odds">
              <div className={g.odds.betika===bestOdds(g.odds)?'best':''}><span>Betika</span><b>{g.odds.betika}</b></div>
              <div className={g.odds.sportpesa===bestOdds(g.odds)?'best':''}><span>SportPesa</span><b>{g.odds.sportpesa}</b></div>
              <div className={g.odds.mozzart===bestOdds(g.odds)?'best':''}><span>Mozzart</span><b>{g.odds.mozzart}</b></div>
            </div>
            <button className="btn">Get Full Analysis →</button>
          </div>
        ))}
      </div>
      <footer>© 2026 MESSIH MatchAnalytics - Kericho, Kenya | Built for winners</footer>
    </div>
  )
}
export default App