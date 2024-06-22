import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'

import TheNavbar from './TheNavbar.vue'

describe('TheNavbar', () => {
  it('logo in navbar', async () => {
    const component = await mountSuspended(TheNavbar)
    expect(component.text()).toContain('FAQ')
  })
})
