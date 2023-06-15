import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('News Tests', async() => {
      await setup({
  })
  it('Renders Sidebar', async () => {
    expect(await $fetch('/')).toMatch('sidebar')
  })
  it('Renders Title', async () => {
    expect(await $fetch('/')).toMatch('WEBSEC')
  })
  it('Renders Toggle Button', async () => {
    expect(await $fetch('/')).toMatch('toggle-button')
  })  
  it('Renders Social Media', async () => {
    expect(await $fetch('/')).toMatch('social-media')
  })
  it('Renders YT Logo', async () => {
    expect(await $fetch('/')).toMatch('logo-yt.png')
  })
  it('Renders TT Logo', async () => {
    expect(await $fetch('/')).toMatch('logo-tt.png')
  })
  it('Renders FB Logo', async () => {
    expect(await $fetch('/')).toMatch('logo-fb.png')
  })
})
