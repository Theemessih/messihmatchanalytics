import { useState } from "react";

const allGames = [
  { id: 1, league: "Premier League", home: "Arsenal", away: "Man City", time: "Today 19:30", tip: "Over 1.5 Goals", confidence: 77, reason: "Both teams scoring form. Last 5 meetings all over 1.5", odds: { betika: "1.28", sportpesa: "1.30", mozzart: "1.27" }, isJackpot: false },
  { id: 2, league: "LaLiga", home: "Barcelona", away: "Real Madrid", time: "Today 22:00", tip: "BTTS Yes", confidence: 82, reason: "El Clasico always BTTS. 8 of last 10", odds: { betika: "1.65", sportpesa: "1.70", mozzart: "1.68" }, isJackpot: true },
  { id: 3, league: "KPL", home: "Gor Mahia", away: "Tusker", time: "Tomorrow 15:00", tip: "Home Win", confidence: 75, reason: "Gor Mahia unbeaten at home 10 games", odds: { betika: "2.10", sportpesa: "2.15", mozzart: "2.08" }, isJackpot: false },
  { id: 4, league: "Premier League", home: "Man Utd", away: "Liverpool", time: "Today 17:30", tip: "Over 2.5", confidence: 88, reason: "High scoring rivalry", odds: { betika: "1.75", sportpesa: "1.80", mozzart: "1.78" }, isJackpot: true },
  { id: 5, league: "Serie A", home: "AC Milan", away: "Inter", time: "Tomorrow 21:45", tip: "Draw", confidence: 68, reason: "Derby often tight", odds: { betika: "3.20", sportpesa: "3.30", mozzart: "3.25" }, isJackpot: false },
  { id: 6, league: "Bundesliga", home: "Bayern", away: "Dortmund", time: "Today 20:30", tip: "Bayern Win", confidence: 79, reason: "Bayern dominance at home", odds: { betika: "1.50", sportpesa: "1.55", mozzart: "1.52" }, isJackpot: false },
  { id: 7, league: "Champions League", home: "Real Madrid", away: "Man City", time: "Tomorrow 22:00", tip: "BTTS Yes", confidence: 88, reason: "Both scored in last 6 UCL meetings", odds: { betika: "1.62", sportpesa: "1.65", mozzart: "1.64" }, isJackpot: true },
  { id: 8, league: "Champions League", home: "Bayern Munich", away: "PSG", time: "Tomorrow 22:00", tip: "Over 2.5 Goals", confidence: 85, reason: "Bayern 12 goals last 3 UCL home games", odds: { betika: "1.78", sportpesa: "1.80", mozzart: "1.79" }, isJackpot: true },
  { id: 9, league: "Champions League", home: "Arsenal", away: "Inter Milan", time: "Today 22:00", tip: "Home Win", confidence: 79, reason: "Arsenal unbeaten at Emirates in UCL", odds: { betika: "2.10", sportpesa: "2.15", mozzart: "2.12" }, isJackpot: false },
  { id: 10, league: "Champions League", home: "Barcelona", away: "Dortmund", time: "Today 22:00", tip: "Barcelona Win", confidence: 81, reason: "Barca 90% win rate at Camp Nou", odds: { betika: "1.55", sportpesa: "1.58", mozzart: "1.56" }, isJackpot: false },
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [isVip, setIsVip] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [code, setCode] = useState("");

  const filtered = filter === "All"? allGames : filter === "Jackpot"? allGames.filter(g => g.isJackpot) : allGames.filter(g => g.league === filter);

  const handleUnlock = () => {
    if(code.length > 5) { setIsVip(true); setShowPay(false); alert("Welcome to VIP! Jackpot Unlocked!"); }
    else { alert("Enter your M-Pesa code e.g. QGH8K..."); }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-1">MESSIH<span className="text-green-400">MatchAnalytics</span></h1>
      <p className="text-center text-gray-400 mb-1">Pro Football Predictions - {allGames.length} Games</p>
      <div className="text-center mb-4">
        {!isVip? (
          <button onClick={()=>setShowPay(true)} className="bg-green-500 text-black font-bold px-6 py-2 rounded-full animate-pulse">🔓 Unlock JACKPOT VIP - 50 KSH</button>
        ) : (
          <span className="bg-yellow-500 text-black px-4 py-1 rounded-full font-bold">✅ VIP UNLOCKED</span>
        )}
      </div>

      {showPay && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 border border-green-500 rounded-2xl p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold text-center mb-4">Lipa na M-Pesa</h2>
            <div className="bg-white text-black p-4 rounded-xl text-center mb-4">
              <p className="text-sm">Buy Goods Till Number</p>
              <p className="text-3xl font-black text-green-600">123456</p>
              <p className="text-xs mt-1">Name: MESSIH ANALYTICS</p>
              <p className="text-lg font-bold mt-2">Amount: 350 KSH</p>
            </div>
            <p className="text-xs text-gray-400 text-center mb-2">1. Go to M-Pesa -> Lipa na M-Pesa -> Buy Goods</p>
            <p className="text-xs text-gray-400 text-center mb-4">2. Enter Till 1581046 and 350 KSH. Then enter code below:</p>
            <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Enter M-Pesa Code e.g. QGH..." className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white mb-3" />
            <button onClick={handleUnlock} className="w-full bg-green-500 text-black font-bold py-3 rounded-lg">Verify & Unlock</button>
            <button onClick={()=>setShowPay(false)} className="w-full mt-2 text-gray-400 text-sm">Cancel</button>
            <p className="text-[10px] text-gray-500 mt-3 text-center">Change Till to your number in App.jsx line 35</p>
          </div>
        </div>
      )}

      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {["All", "Jackpot", "Premier League", "Champions League", "LaLiga", "KPL"].map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-full text-sm ${filter === f? "bg-green-500 text-black" : "bg-gray-800"}`}>{f}</button>
        ))}
      </div>
      <div className="grid gap-4 max-w-4xl mx-auto">
        {filtered.map(game => {
          const isLocked = game.isJackpot &&!isVip;
          return (
            <div key={game.id} className={`bg-gray-900 rounded-xl p-4 border ${isLocked? "border-yellow-500/30" : "border-gray-800"}`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">{game.league}</span>
                {game.isJackpot && <span className={`text-xs px-2 py-1 rounded font-bold ${isVip? "bg-yellow-500 text-black" : "bg-yellow-500/20 text-yellow-500"}`}>🔒 JACKPOT VIP</span>}
                <span className="text-xs text-gray-400">{game.time}</span>
              </div>
              <h3 className="text-lg font-bold">{game.home} vs {game.away}</h3>
              {isLocked? (
                <div className="mt-3 bg-black rounded-lg p-4 text-center border border-dashed border-yellow-500/30">
                  <p className="text-yellow-500 font-bold blur-sm">Tip: {game.tip} - {game.confidence}%</p>
                  <button onClick={()=>setShowPay(true)} className="mt-2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">Pay 50 KSH to Unlock</button>
                </div>
              ) : (
                <div className="mt-3 bg-gray-800 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold">{game.tip}</span>
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">{game.confidence}%</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{game.reason}</p>
                  <div className="flex gap-2 mt-3 text-xs">
                    <span className="bg-black px-2 py-1 rounded">Betika {game.odds.betika}</span>
                    <span className="bg-black px-2 py-1 rounded">SportPesa {game.odds.sportpesa}</span>
                    <span className="bg-black px-2 py-1 rounded">Mozzart {game.odds.mozzart}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
