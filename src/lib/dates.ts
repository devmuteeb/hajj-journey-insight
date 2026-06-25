import { useEffect, useState } from "react";

export function formatDates() {
  const now = new Date();
  const gregorian = now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  let hijri = "";
  try {
    hijri = new Intl.DateTimeFormat("en-TN-u-ca-islamic", { day: "numeric", month: "long", year: "numeric" }).format(now);
  } catch { hijri = ""; }
  return { gregorian, hijri };
}

// SSR-safe: returns empty strings until mounted on client to avoid hydration mismatch
export function useFormattedDates() {
  const [d, setD] = useState({ hijri: "", gregorian: "" });
  useEffect(() => { setD(formatDates()); }, []);
  return d;
}

// Find days until next 8 Dhul Hijjah (start of Hajj). Computed on client only.
function getHijriParts(d: Date) {
  try {
    const fmt = new Intl.DateTimeFormat("en-u-ca-islamic-umalqura", { day: "numeric", month: "numeric", year: "numeric" });
    const parts = fmt.formatToParts(d);
    const get = (t: string) => parseInt(parts.find(p => p.type === t)?.value || "0", 10);
    return { day: get("day"), month: get("month"), year: get("year") };
  } catch { return null; }
}

export function daysUntilHajj(): { days: number; date: string } | null {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 400; i++) {
    const d = new Date(today.getTime() + i * 86400000);
    const h = getHijriParts(d);
    if (h && h.month === 12 && h.day === 8) {
      return {
        days: i,
        date: d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      };
    }
  }
  return null;
}

export function useHajjCountdown() {
  const [c, setC] = useState<{ days: number; date: string } | null>(null);
  useEffect(() => { setC(daysUntilHajj()); }, []);
  return c;
}
