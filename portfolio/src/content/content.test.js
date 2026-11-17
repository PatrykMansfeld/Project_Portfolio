// Guards for editing content by hand: catches a missing translation, a typo in
// an icon name or a malformed date before it reaches the live site.
import { describe, expect, it } from 'vitest'
import { icons } from '../components/ui/icons.js'
import { LANGS, isLocalized } from '../i18n/localize.js'
import { messages } from '../i18n/messages.js'
import { certificates, education, jobs } from './career.js'
import { cv, links, profile } from './profile.js'
import { projects } from './projects.js'
import { skills } from './skills.js'

// { a: { b: 'x', c: fn } } → { a: { b: 'string', c: 'function' } }
function shape(value) {
  if (value === null || typeof value !== 'object') return typeof value
  return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, shape(v)]))
}

// Every { pl, en } pair in the content, with its path for readable test names.
function localizedPairs(value, path) {
  if (isLocalized(value)) return [[path, value]]
  if (value === null || typeof value !== 'object') return []
  return Object.entries(value).flatMap(([key, v]) => localizedPairs(v, `${path}.${key}`))
}

describe('UI messages', () => {
  it('have the same keys and value types in every language', () => {
    for (const lang of LANGS) expect(shape(messages[lang])).toEqual(shape(messages.pl))
  })
})

describe('content translations', () => {
  const pairs = localizedPairs({ profile, projects, jobs, education, certificates }, 'content')

  it('are found', () => {
    expect(pairs.length).toBeGreaterThan(20)
  })

  it.each(pairs)('%s is filled in for every language', (_path, pair) => {
    for (const lang of LANGS) {
      const texts = [pair[lang]].flat()
      expect(texts.length).toBeGreaterThan(0)
      for (const text of texts) expect(String(text).trim()).not.toBe('')
    }
    if (Array.isArray(pair.pl)) expect(pair.en).toHaveLength(pair.pl.length)
  })
})

describe('content data', () => {
  it('only uses icons that exist', () => {
    const used = [...projects.map(p => p.icon), ...profile.hobbies.map(h => h.icon)]
    for (const name of used) expect(Object.keys(icons)).toContain(name)
  })

  it('has unique project numbers', () => {
    const nums = projects.map(p => p.num)
    expect(new Set(nums).size).toBe(nums.length)
  })

  it('writes dates as "MM/YYYY — MM/YYYY"', () => {
    for (const { date } of [...jobs, ...education]) {
      expect(date).toMatch(/^(0[1-9]|1[0-2])\/\d{4} — (0[1-9]|1[0-2])\/\d{4}$/)
    }
  })

  it('has project links that are empty or full https URLs', () => {
    for (const { repo, demo } of projects) {
      for (const url of [repo, demo]) expect(url === '' || url.startsWith('https://')).toBe(true)
    }
  })

  it('has CV paths that are empty or PDFs in cv/', () => {
    for (const lang of LANGS) expect(cv[lang] === '' || /^cv\/.+\.pdf$/.test(cv[lang])).toBe(true)
  })

  it('has contact links', () => {
    expect(links.github).toMatch(/^https:\/\/github\.com\//)
    expect(links.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\//)
    expect(links.email).toMatch(/^[^@\s]+@[^@\s]+\.[a-z]+$/)
  })

  it('has non-empty skill groups', () => {
    for (const group of skills) expect(group.items.length).toBeGreaterThan(0)
  })
})
