import { randomString } from 'helpers/utilities'

export default {
    state: {
        selected: {},
        items: []
    },
    selectId: randomString(10, {onlyChars: true}),
    onBeforeMount() {},
    onMounted() {
        this.getItems()
    },
    onBeforeUpdate() {
        console.log(this.state)
    },
    onBeforeUnmount() {},
    onUnmounted() {},
    getItems() {
        this.update({
            items: [
                {id: this.generateId(), name: 'auth', title: 'AUTH', selected: false, disabled: false},
                {id: this.generateId(), name: 'ratelimit', title: 'RATE LIMIT', selected: false, disabled: false},
                {id: this.generateId(), name: 'middleware-a', title: 'MIDDLEWARE A', selected: false, disabled: true},
                {id: this.generateId(), name: 'middleware-b', title: 'MIDDLEWARE B', selected: false, disabled: true},
                {id: this.generateId(), name: 'middleware-c', title: 'MIDDLEWARE C', selected: false, disabled: true},
            ]
        })
    },
    generateId() {
        return randomString(10, { onlyChars: true })
    },
    updateSelectedItem(e) {
        const isChecked = e.target.checked
        const name = e.target.name
        this.state.selected[name] = isChecked
        const t = Object.keys(this.state.selected).filter(x => this.state.selected[x])
        this.props.callback(this.props.name, t)
    }
}