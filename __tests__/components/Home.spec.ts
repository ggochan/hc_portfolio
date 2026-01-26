import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../../src/components/Home.vue'

describe('Home 컴포넌트', () => {
  it('Home 텍스트가 렌더링됨', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('Home')
  })
})