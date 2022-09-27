import { searchClient } from '../../api-gateway.sdk'
import { randomString } from 'helpers/utilities'

export default {
    state: {
        selected: '',
        items: []
    },
    dropdownId: randomString(10, {onlyChars: true}),
    onBeforeMount(props) {
        this.options = {ajax: searchClient()}
        if (props.selected) {
            state.items.map(x => {
                x.selected = (x.name === props.selected)
                return x
            })
        }
    },
    onMounted() {
        // this.getClients()
    },
    onBeforeUpdate() {},
    onBeforeUnmount() {},
    onUnmounted() {},
    getClients() {
        const selected = this.props.selected
        const items = [
            {name: '1', title: 'Dummy Title 1', selected: false},
            {name: '2', title: 'Dummy Title 2', selected: false},
            {name: '3', title: 'Dummy Title 3', selected: false},
            {name: '4', title: 'Dummy Title 4', selected: false},
            {name: '5', title: 'Dummy Title 5', selected: false},
            {name: '6', title: 'Dummy Title 6', selected: false},
            {name: '7', title: 'Dummy Title 7', selected: false},
        ]
        const obj = {
            items: items.map(x => {
                if (x.name === selected) x.selected = true
                return x
            })
        }
        this.update(obj)
    },
    callbackSelect2(selectedValue) {
        this.props.callback(this.props.name, selectedValue)
    }
}