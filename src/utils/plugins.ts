import type { App, Component, Plugin } from 'vue'

export const registerComponent = (app: App, component: Component) => {
	app.component(component.name!, component)
}

export const registerPlugin = (app: App, plugin: Plugin) => {
	app.use(plugin)
}
