import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('Home Tests', async() => {
      await setup({
  })
  it('Renders Title', async () => {
    expect(await $fetch('/')).toMatch('Games')
  })
  it('Renders Game 1', async () => {
    expect(await $fetch('/')).toMatch('injection-dungeon-cover.png')
  })
  it('Renders Game 2', async () => {
    expect(await $fetch('/')).toMatch('escape-the-bac-room-cover.png')
  })
  it('Renders Game 3', async () => {
    expect(await $fetch('/')).toMatch('crypto-savior-cover.png')
  })
  it('Renders Game 4', async () => {
    expect(await $fetch('/')).toMatch('tba-2-cover.png')
  })
  
})
