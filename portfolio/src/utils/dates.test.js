import { describe, expect, it } from 'vitest'
import { isOngoing, yearsSince } from './dates.js'

describe('isOngoing', () => {
  const range = '10/2024 — 06/2026'

  it('is ongoing up to the last day of the end month', () => {
    expect(isOngoing(range, new Date(2025, 0, 1))).toBe(true)
    expect(isOngoing(range, new Date(2026, 5, 30, 23, 59))).toBe(true)
  })

  it('is finished from the first day after the end month', () => {
    expect(isOngoing(range, new Date(2026, 6, 1))).toBe(false)
    expect(isOngoing(range, new Date(2030, 0, 1))).toBe(false)
  })

  it('treats a missing or non-date end as ongoing', () => {
    expect(isOngoing('10/2024 — obecnie')).toBe(true)
    expect(isOngoing('10/2024')).toBe(true)
  })
})

describe('yearsSince', () => {
  it('counts calendar years', () => {
    expect(yearsSince(2022, new Date(2026, 10, 16))).toBe(4)
    expect(yearsSince(2022, new Date(2022, 0, 1))).toBe(0)
  })
})
