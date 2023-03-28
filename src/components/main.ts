import type { App } from 'vue'
import { CSButton } from '@/components'

export default {
	install: (app: App) => {
		app.component('CSButton', CSButton)
	}
}

export { CSButton }
