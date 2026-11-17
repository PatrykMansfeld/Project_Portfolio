// Polish: 1 rok, 2–4 lata, 5+ lat — and 12–14 take the "many" form (12 lat).
export function plPlural(n, one, few, many) {
  if (n === 1) return one
  const lastDigit = n % 10
  const lastTwo = n % 100
  return lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14) ? few : many
}

export function enPlural(n, one, many) {
  return n === 1 ? one : many
}
