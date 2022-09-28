import { randomString, logInfo } from 'helpers/utilities'

export default {
    state: {
        items: [
            {name: '0', title: 'Inactive'},
            {name: '1', title: 'Active'},
        ]
    },
    dropdown: {
        id: randomString(10, { onlyChars: true }),
        name: randomString(10, { onlyChars: false })
    },
    onBeforeMount() {
        // 
    },
    onBeforeUpdate() {
        // 
    },
    onMounted() {
        logInfo(`[EVENTS][MOUNTED][${this.name}]`)
    },
}