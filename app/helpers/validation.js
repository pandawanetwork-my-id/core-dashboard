import result from 'lodash.result'

class Validation {
    constructor (data) {
        this.data = data
    }

    validate (config) {
        try {
            for (const field in config) {
                const types = (config[field] || '')
                    .split(',')
                    .map(x => x.trim())
                    .filter(x => x.length > 0)
                if (types.length === 0) continue
                for (const type of types) {
                    this.execute(field, type)
                }
            }
        } catch (err) {
            throw err
        }
    }

    execute(field, type) {
        switch (type) {
            case 'required':
                this.required(field)
                break;
            default:
                break;
        }
    }

    required(field) {
        const msg = `${field} Required`
        if (!result(this.data, field)) throw new Error(msg)
    }
}

const newRouterFormConfig = {
    clientId: 'required',
    httpScheme: 'required',
    domain: 'required',
    apiKey: 'required'
}
export const validateNewRouter = function (data)  {
    new Validation(data).validate(newRouterFormConfig)
}