export function formatDates() {
  const now = new Date();
  const gregorian = now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  let hijri = "";
  try {
    hijri = new Intl.DateTimeFormat("en-TN-u-ca-islamic", { day: "numeric", month: "long", year: "numeric" }).format(now);
  } catch { hijri = ""; }
  return { gregorian, hijri };
}
