import mainComponents from './components/layout.index'

export const layoutComponents = Object.keys(mainComponents)

export default function layoutModule(name) {
	return mainComponents[name]
}