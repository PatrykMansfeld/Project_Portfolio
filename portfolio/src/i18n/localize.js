export const LANGS = ['pl', 'en']

// A content value written as { pl: …, en: … } and nothing else.
export function isLocalized(value) {
  return (
    value !== null &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    Object.keys(value).length === LANGS.length &&
    LANGS.every(code => code in value)
  )
}

// Deeply replaces every { pl, en } pair with the value for `lang`,
// leaving everything else (shared strings, numbers, arrays) as it is.
export function localize(value, lang) {
  if (isLocalized(value)) return value[lang]
  if (Array.isArray(value)) return value.map(item => localize(item, lang))
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, localize(v, lang)]))
  }
  return value
}
