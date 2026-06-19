import { useEffect, useState } from "react";
import { ArrowRightLeft, Banknote } from "lucide-react";

const CURRENCIES = ["GBP", "USD", "EUR", "AED", "PKR", "INR", "MYR", "IDR", "TRY", "EGP"];

export function CurrencyCard() {
  const [from, setFrom] = useState("GBP");
  const [to] = useState("SAR");
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState<number | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setErr(false); setRate(null);
    fetch(`https://open.er-api.com/v6/latest/${from}`)
      .then(r => r.json())
      .then(d => setRate(d?.rates?.SAR ?? null))
      .catch(() => setErr(true));
  }, [from]);

  const out = rate ? (amount * rate).toFixed(2) : "—";

  return (
    <div className="ornate-card p-7">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl text-ink flex items-center gap-2"><Banknote size={18} className="text-gold"/> Currency to Riyal</h3>
        <span className="text-xs text-ink/60 uppercase tracking-wider">Live</span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-end">
        <div>
          <label className="text-xs text-ink/60 uppercase tracking-wider">You pay</label>
          <div className="flex bg-white border border-gold/40 rounded mt-1">
            <select value={from} onChange={e=>setFrom(e.target.value)} className="bg-transparent px-2 py-2 outline-none border-r border-gold/30 text-ink font-bold">
              {CURRENCIES.map(c => <option key={c}>{c}</option>)}
            </select>
            <input type="number" value={amount} onChange={e=>setAmount(+e.target.value || 0)} className="flex-1 w-full px-3 py-2 outline-none text-right text-ink" />
          </div>
        </div>
        <ArrowRightLeft size={20} className="text-gold mb-3" />
        <div>
          <label className="text-xs text-ink/60 uppercase tracking-wider">You get (SAR)</label>
          <div className="bg-gold/10 border border-gold rounded px-3 py-2 mt-1 text-right font-display text-2xl text-ink">
            {err ? "—" : out}
          </div>
        </div>
      </div>
      <div className="text-xs text-ink/55 mt-3 text-center">
        {rate ? <>1 {from} = {rate.toFixed(3)} SAR · {to} via open.er-api.com</> : err ? "Live rate unavailable" : "Fetching live rate…"}
      </div>
    </div>
  );
}
