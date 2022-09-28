import { logInfo } from 'helpers/utilities'

export const changeStorage = (data, prefix) => {
    if (prefix) prefix = `${prefix}_`
    for (const key in data) {
        const value = data[key]
        const fullKey = `${prefix}${key}`
        localStorage.setItem(fullKey, value)
        logInfo(`[ACTIONS][STORAGE]setting ${fullKey}`)
    }
}
export const getStorage = (key, prefix, defaultValue) => {
    if (prefix) prefix = `${prefix}_`
    else prefix = ''
    const fullKey = `${prefix}${key}`
    const v = localStorage.getItem(fullKey)
    logInfo(`[ACTIONS][STORAGE]getting ${fullKey}`)
    return v || defaultValue
}

export const deleteStorage = (item) => {
    localStorage.removeItem(item)
}
