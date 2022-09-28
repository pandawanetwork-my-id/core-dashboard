import { randomString } from 'helpers/utilities'
import components from '../globals/api-gateway-global-components'

export default {
    components,
    state: {
        'table_loadingdata': false,
    },
    payload: {
        clientId: '',
        status: 1,
        domain: ''
    },
    ids: {
        client: randomString(10, {onlyChars: true}),
        domain: randomString(10, {onlyChars: true}),
        status: randomString(10, {onlyChars: true}),
    },
    onBeforeMount(props, state) {},
    onMounted() {},
    onBeforeUpdate(props, state) {
        const shareState = props.dataState
        // disable loading after modal hidden
        if (state.modal_show && !shareState.modal_show) {
            this.update({
                'modal_show': shareState.modal_show 
            })
        }
        // disable loading after table items was loaded
        if (state.table_loadingdata && !shareState.table_loadingdata) {
            this.update({
                table_loadingdata: shareState.table_loadingdata
            })
        }
    },
    onBeforeUnmount() {},
    triggerAddModal() {
        this.props.changeState(this.name, {
            'modal_show': true
        })
        this.update({
            'modal_show': true
        })
    },
    triggerFilterData() {
        const newState = {
            'filterdata_client': this.$('#' + this.ids.client).value,
            'filterdata_domain': this.$('#' + this.ids.domain).value,
            'filterdata_status': this.$('#' + this.ids.status).value,
        }
        this.props.changeState(this.name, {
            'table_loadingdata': true,
            ...newState
        })
        this.update({
            'table_loadingdata': true,
            ...newState
        })
    },
    updatePayload(key, value) {
        console.log(key, value)
    }
}