// "10/2024 — 06/2026" → true until the end month is over.
// A missing or non-date end ("obecnie", "present") counts as ongoing.
export function isOngoing(range, now = new Date()) {
  const match = range
    .split('—')[1]
    ?.trim()
    .match(/^(\d{1,2})\/(\d{4})$/)
  if (!match) return true
  const [, month, year] = match.map(Number)
  // new Date(year, month, 1) = first day of the month *after* the end month
  return now < new Date(year, month, 1)
}

export function yearsSince(year, now = new Date()) {
  return now.getFullYear() - year
}
