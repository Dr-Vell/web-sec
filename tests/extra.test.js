import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('Extra Tests', async() => {
      await setup({
  })
  it('Renders Title', async () => {
    expect(await $fetch('/')).toMatch('Extra')
  })
  it('Renders Extra 1', async () => {
    expect(await $fetch('/extra')).toMatch('htb.png')
  })
  it('Renders Extra 2', async () => {
    expect(await $fetch('/extra')).toMatch('owasp.png')
  })
  it('Renders Extra 3', async () => {
    expect(await $fetch('/extra')).toMatch('ea.png')
  })
  it('Renders Extra 4', async () => {
    expect(await $fetch('/extra')).toMatch('pico.png')
  })
  it('Renders Extra 5', async () => {
    expect(await $fetch('/extra')).toMatch('texas.png')
  })
  
})
