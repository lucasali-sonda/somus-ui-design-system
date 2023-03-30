import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CSButton from './CSButton.vue'

describe('CSButton', () => {
	it('renders properly', () => {
		const wrapper = mount(CSButton, { props: { text: 'It is a test' } })
		expect(wrapper.text()).toContain('It is a test')
	})
})
