import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeaderBlock from '../HeaderBlock.vue'

describe('HeaderBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(HeaderBlock, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
