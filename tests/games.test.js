import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils'

describe('Home Tests', async() => {
      await setup({
  })

  it('Renders Title 1', async () => {
    expect(await $fetch('/injection-dungeon')).toMatch('Injection Dungeon')
  })
  it('Renders Game 1 Iframe', async () => {
    expect(await $fetch('/injection-dungeon')).toMatch('iframe')
  })
  it('Renders Game 1 Fullscreen Button', async () => {
    expect(await $fetch('/injection-dungeon')).toMatch('fullscreen-button')
  })
  it('Renders Game 1 Download Button', async () => {
    expect(await $fetch('/injection-dungeon')).toMatch('Injection Dungeon.zip')
  })


  it('Renders Title 2', async () => {
    expect(await $fetch('/escape-the-bac-room')).toMatch('Escape The B.A.C. Room')
  })
  it('Renders Game 2 Iframe', async () => {
    expect(await $fetch('/escape-the-bac-room')).toMatch('iframe')
  })
  it('Renders Game 2 Fullscreen Button', async () => {
    expect(await $fetch('/escape-the-bac-room')).toMatch('fullscreen-button')
  })
  it('Renders Game 2 Download Button', async () => {
    expect(await $fetch('/escape-the-bac-room')).toMatch('Escape The B.A.C. Room.zip')
  })


  it('Renders Title 3', async () => {
    expect(await $fetch('/crypto-savior')).toMatch('Crypto Savior')
  })
  it('Renders Game 3 Iframe', async () => {
    expect(await $fetch('/crypto-savior')).toMatch('iframe')
  })
  it('Renders Game 3 Fullscreen Button', async () => {
    expect(await $fetch('/crypto-savior')).toMatch('fullscreen-button')
  })
  it('Renders Game 3 Download Button', async () => {
    expect(await $fetch('/crypto-savior')).toMatch('Crypto Savior.zip')
  })
  
})
