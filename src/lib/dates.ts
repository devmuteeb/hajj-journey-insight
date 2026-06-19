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
