import { randomString } from 'helpers/utilities'

export default {
    state: {
        selected: '',
        items: [
            {name: 'http', title: 'HTTP', selected: false},
            {name: 'https', title: 'HTTPS', selected: false},
        ]
    },
    dropdownId: randomString(10, {onlyChars: true}),
    onBeforeMount(props, state) {
        if (props.selected) {
            state.items.map(x => {
                x.selected = (x.name === props.selected)
                return x
            })
        }
    },
    onMounted() {},
    onBeforeUpdate() {},
    onBeforeUnmount() {},
    onUnmounted() {},
    getValue() {
        const value = this.$(`#${this.dropdownId}`).value
        this.props.callback(this.props.name, value)
    }
}