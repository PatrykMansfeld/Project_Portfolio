import { describe, expect, it } from 'vitest'
import { isLocalized, localize } from './localize.js'

describe('isLocalized', () => {
  it('recognises exactly { pl, en }', () => {
    expect(isLocalized({ pl: 'a', en: 'b' })).toBe(true)
    expect(isLocalized({ pl: ['a'], en: ['b'] })).toBe(true)
  })

  it('rejects anything else', () => {
    expect(isLocalized({ pl: 'a' })).toBe(false)
    expect(isLocalized({ pl: 'a', en: 'b', de: 'c' })).toBe(false)
    expect(isLocalized(['pl', 'en'])).toBe(false)
    expect(isLocalized(null)).toBe(false)
    expect(isLocalized('pl')).toBe(false)
  })
})

describe('localize', () => {
  const source = {
    title: { pl: 'Projekty', en: 'Projects' },
    year: '2025',
    count: 3,
    tags: ['Vue.js', 'Node.js'],
    highlights: { pl: ['jeden', 'dwa'], en: ['one', 'two'] },
    items: [{ name: { pl: 'Kot', en: 'Cat' }, legs: 4 }],
  }

  it('picks the requested language at every depth', () => {
    expect(localize(source, 'en')).toEqual({
      title: 'Projects',
      year: '2025',
      count: 3,
      tags: ['Vue.js', 'Node.js'],
      highlights: ['one', 'two'],
      items: [{ name: 'Cat', legs: 4 }],
    })
    expect(localize(source, 'pl').items[0].name).toBe('Kot')
  })

  it('does not mutate the source', () => {
    localize(source, 'en')
    expect(source.title).toEqual({ pl: 'Projekty', en: 'Projects' })
  })
})
