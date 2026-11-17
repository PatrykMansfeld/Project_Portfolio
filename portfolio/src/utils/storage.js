// localStorage can throw (private mode, blocked site data) — treat that as empty
// and keep going: the preference simply isn't remembered for the next visit.

export function readStorage(key, isValid = () => true) {
  try {
    const value = localStorage.getItem(key)
    return value !== null && isValid(value) ? value : null
  } catch {
    return null
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore — see above
  }
}
