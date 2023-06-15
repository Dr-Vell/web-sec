import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('Extra Tests', async() => {
      await setup({
  })
  it('Renders Title', async () => {
    expect(await $fetch('/about')).toMatch('WEBSEC')
  })
  it('Renders About Text', async () => {
    expect(await $fetch('/about')).toMatch('Happy learning!')
  })
  it('Renders About Img', async () => {
    expect(await $fetch('/about')).toMatch('about.png')
  })
  
})
