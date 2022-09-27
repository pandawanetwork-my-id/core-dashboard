
import administrationModules from './administration/administration'

const moduleObject = {
    ...administrationModules.pages,
}

export default function pageModule(name) {
	return moduleObject[name]
}