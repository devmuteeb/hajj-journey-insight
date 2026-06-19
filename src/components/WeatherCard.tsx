import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Droplets, MapPin } from "lucide-react";

type W = { temp: number; wind: number; code: number } | null;

const ICON = (code: number, size = 56) => {
  if ([0, 1].includes(code)) return <Sun size={size} />;
  if ([2, 3, 45, 48].includes(code)) return <Cloud size={size} />;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <CloudSnow size={size} />;
  if (code >= 51) return <CloudRain size={size} />;
  return <Sun size={size} />;
};
const LABEL = (c: number) => c === 0 ? "Clear sky" : c <= 3 ? "Partly cloudy" : c <= 48 ? "Foggy" : c <= 67 ? "Rain" : c <= 77 ? "Snow" : c <= 82 ? "Showers" : "Stormy";

export function WeatherCard() {
  const [w, setW] = useState<W>(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=21.4225&longitude=39.8262&current_weather=true&timezone=Asia%2FRiyadh")
      .then(r => r.json())
      .then(d => setW({ temp: Math.round(d.current_weather.temperature), wind: Math.round(d.current_weather.windspeed), code: d.current_weather.weathercode }))
      .catch(() => setErr(true));
  }, []);
  return (
    <div className="ornate-card p-7 max-w-sm">
      <div className="flex items-center justify-between text-ink/70 text-xs uppercase tracking-[0.25em] mb-3">
        <span className="flex items-center gap-1"><MapPin size={12} /> Makkah · Live</span>
        <span>الكعبة</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-gold">{w ? ICON(w.code) : <Sun size={56} className="opacity-30" />}</div>
        <div>
          <div className="font-display text-6xl text-ink leading-none">{w ? w.temp : err ? "—" : "··"}<span className="text-3xl text-gold align-top">°C</span></div>
          <div className="text-ink/70 mt-1 text-sm">{w ? LABEL(w.code) : err ? "Unavailable" : "Loading…"}</div>
        </div>
      </div>
      <div className="gold-divider my-4"><span /><span className="diamond" /><span /></div>
      <div className="flex justify-between text-xs text-ink/70">
        <span className="flex items-center gap-1"><Wind size={13} className="text-gold"/> {w ? `${w.wind} km/h` : "—"}</span>
        <span className="flex items-center gap-1"><Droplets size={13} className="text-gold"/> Hijaz region</span>
        <span>الحرم</span>
      </div>
    </div>
  );
}
