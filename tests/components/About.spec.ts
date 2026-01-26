import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import About from '../../src/components/About.vue'

describe('About 컴포넌트', () => {
  it('About 텍스트가 렌더링됨', () => {
    const wrapper = mount(About)
    expect(wrapper.text()).toContain('About')
  })
})