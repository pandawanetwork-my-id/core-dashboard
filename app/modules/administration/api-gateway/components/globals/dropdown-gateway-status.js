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
    onBeforeMount(props) {
        if (typeof props.callback !== 'function') throw new Error(`${this.name} need callback function`)
    },
    onBeforeUpdate() {
        // 
    },
    onMounted() {
        logInfo(`[EVENTS][MOUNTED][${this.name}]`)
    },
    callback(e) {
        this.props.callback(this.props.name, e.target.value)
    }
}