import formComponents from './forms/index-forms'
import utilitiesComponents from './utilities/index-utilities'

const moduleObject = {
    ...formComponents,
    ...utilitiesComponents
}

export const tagComponents = Object.keys(moduleObject)

export default function tagModule(name) {
    return moduleObject[name]
}