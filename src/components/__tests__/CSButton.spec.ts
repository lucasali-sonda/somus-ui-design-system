import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CSButton from '../CSButton.vue'

describe('CSButton', () => {
	it('renders properly', () => {
		const wrapper = mount(CSButton, { props: { text: 'It is a test' } })
		expect(wrapper.text()).toContain('It is a test')
	})
})
