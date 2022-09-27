import { randomString } from 'helpers/utilities'

export default {
    state: {
        'table_loadingdata': false,
        // filters
        'filterdata_client': null,
        'filterdata_domain': null,
        'filterdata_status': null
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
}