import components from '../components/router-dashboard/index'
import globalComponents from '../components/globals/api-gateway-global-components'
import { logInfo } from 'helpers/utilities'


export default {
    state: {
        // modal
        'modal_id': null,
        'modal_show': false,
        // table
        'table_id': '-',
        'table_items': [],
        'table_loadingdata': false,
        'table_isNoData': true,
    },
    components: {
        ...components,
        ...globalComponents,
    },
    publicParentMethod() {
        return this
    },
    onBeforeMount(props, state) {
        
    },
    onMounted() {},
    searchData() {},
    // call from filter.riot
    triggerAddNewModal() {
        this.modal.show = true
        this.update()
    },
    // call from add-new-data
    updateState(from, data) {
        logInfo('Change state from: ', from, data)
        this.update(data)
    },
}