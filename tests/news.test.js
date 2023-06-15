import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('News Tests', async() => {
      await setup({
  })
  it('Renders Title', async () => {
    expect(await $fetch('/news')).toMatch('News')
  })
  it('Renders Article', async () => {
    expect(await $fetch('/news')).toMatch('articulo')
  })
  it('Renders Article Img', async () => {
    expect(await $fetch('/news')).toMatch('articulo-imagen')
  })
  it('Renders Article Info', async () => {
    expect(await $fetch('/news')).toMatch('articulo-info')
  })
  it('Renders Article Author', async () => {
    expect(await $fetch('/news')).toMatch('articulo-autor')
  })
})
