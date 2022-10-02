import { randomString, logInfo } from 'helpers/utilities'
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
        domain: randomString(10, {onlyChars: true}),
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
        this.payload['domain'] = this.$('#' + this.ids.domain).value
        this.props.changeState(this.name, {
            'table_loadingdata': true,
            filterdata_status: this.payload.status,
            filterdata_clientId:this.payload.clientId,
            filterdata_domain: this.payload.domain
        })
        debugger
        this.update({
            'table_loadingdata': true
        })
    },
    updatePayload(key, value) {
        if (value) {
            this.payload[key] = value
            this.update()
            logInfo(`${key} payload changed to ${value}`)
        }
    }
}