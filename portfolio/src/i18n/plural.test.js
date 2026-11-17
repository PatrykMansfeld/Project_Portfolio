import { describe, expect, it } from 'vitest'
import { enPlural, plPlural } from './plural.js'

const lat = n => plPlural(n, 'rok', 'lata', 'lat')

describe('plPlural', () => {
  it('uses the singular for 1', () => {
    expect(lat(1)).toBe('rok')
  })

  it.each([2, 3, 4, 22, 34, 102])('uses the "few" form for %i', n => {
    expect(lat(n)).toBe('lata')
  })

  it.each([0, 5, 11, 12, 13, 14, 21, 25, 112])('uses the "many" form for %i', n => {
    expect(lat(n)).toBe('lat')
  })
})

describe('enPlural', () => {
  it('uses the singular only for 1', () => {
    expect(enPlural(1, 'year', 'years')).toBe('year')
    expect(enPlural(0, 'year', 'years')).toBe('years')
    expect(enPlural(4, 'year', 'years')).toBe('years')
  })
})
