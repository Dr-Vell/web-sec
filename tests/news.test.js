import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('News Tests', async() => {
      await setup({
  })
  it('Renders Title', async () => {
    expect(await $fetch('/news')).toMatch('News')
  })
  it('Renders Article', async () => {
    expect(await $fetch('/news').then(res => res.includes('articulo') || res.includes('API call limit exceeded.') || res.includes('No news found today. :c'))).toBe(true)
  })
  it('Renders Article Img', async () => {
    expect(await $fetch('/news').then(res => res.includes('articulo-imagen') || res.includes('API call limit exceeded.') || res.includes('No news found today. :c'))).toBe(true)
  })
  it('Renders Article Info', async () => {
    expect(await $fetch('/news').then(res => res.includes('articulo-info') || res.includes('API call limit exceeded.') || res.includes('No news found today. :c'))).toBe(true)
  })
  it('Renders Article Author', async () => {
    expect(await $fetch('/news').then(res => res.includes('articulo-autor') || res.includes('API call limit exceeded.') || res.includes('No news found today. :c'))).toBe(true)
  })
})
