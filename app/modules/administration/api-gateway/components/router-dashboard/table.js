import { randomString, showAlertError, showToastSuccess, showToastError, showConfirmation } from 'helpers/utilities'
import { GetRoutes, TrashRoute, DeactivateRoute, ReactivateRoute, ActivateRoute } from '../../api-gateway.sdk'

export default {
    state: {
        items: [],
        loadingdata: false,
        isNoData: true,
        edit: {
            modal_show: false,
            data: {}
        }
    },
    badgeStatus: {
        '0': 'warning',
        '-1': 'danger',
        '1': 'success'
    },
    tableId: randomString(10, {onlyChars: true}),
    onBeforeMount() {},
    onMounted(props, localState) {
        this.getData(localState)
    },
    onBeforeUpdate(props, localState) {
        const shareState = props.dataState
        console.log(shareState)
        if (!localState.loadingdata && shareState.table_loadingdata) {
            this.getData(shareState)
        }
    },
    onBeforeUnmount() {},
    getData({filterdata_client: clientId, filterdata_domain: domain, filterdata_status: status}) {
        this.update({
            loadingdata: true
        })
        GetRoutes({clientId, domain, status, sorts: '_id:desc'})
            .catch(err => {
                showAlertError(err)
                return null
            })
            .then((res={}) => {
                const items = res.data
                const isNoData = !items
                this.props.changeState(this.name, {table_loadingdata: false, table_items: items, table_isNoData: isNoData})
                const data = {
                    loadingdata: false,
                    items: items.map((x, i) => {
                        x.n = parseInt(i) + 1
                        return x
                    }),
                    isNoData
                }
                // console.log(data)
                this.update(data)
            })
    },
    trashRoute(e) {
        const { _id, clientId } = e.data
        showConfirmation('Remove Client Route "'+ clientId +'"?', {width: '300px'}).then((res) => {
            if (!res.isConfirmed) return null
            TrashRoute({ dataId: _id })
                .catch(err => {
                    showAlertError(err)
                    return null
                })
                .then(res => {
                    if (!res) return null
                    showToastSuccess('Route Removed')
                    this.getData(this.state)
                })
        })
    },
    activateRoute(e) {
        const { _id, clientId } = e.data
        showConfirmation('Atcivate This Client Route "'+ clientId +'"?', {width: '300px'}).then((res) => {
            if (!res.isConfirmed) return null
            ActivateRoute({ dataId: _id })
                .catch(err => {
                    showAlertError(err)
                    return null
                })
                .then(res => {
                    if (!res) return null
                    showToastSuccess('Route Removed')
                })
        })
    },
    deactivateRoute(e) {
        const { _id, clientId } = e.data
        showConfirmation('Deatcivate This Client Route "'+ clientId +'"?', {width: '300px'}).then((res) => {
            if (!res.isConfirmed) return null
            DeactivateRoute({ dataId: _id })
                .catch(err => {
                    showAlertError(err)
                    return null
                })
                .then(res => {
                    if (!res) return null
                    showToastSuccess('Route Removed')
                })
        })
    },
    reactivateRoute(e) {
        const { _id, clientId } = e.data
        showConfirmation('Re-Activate This Client Route "'+ clientId +'"?', {width: '300px'}).then((res) => {
            if (!res.isConfirmed) return null
            ReactivateRoute({ dataId: _id })
                .catch(err => {
                    showAlertError(err)
                    return null
                })
                .then(res => {
                    if (!res) return null
                    showToastSuccess('Route Removed')
                    DeactivateRoutes({
                        clientIds: clientId
                    })
                        .catch(errDeactivate => {
                            showToastError(errDeactivate.message)
                            return null
                        })
                        .then(() => {
                            showToastSuccess('Route Deactivated')
                            setTimeout(() => {
                                this.getData(this.state)
                            }, 1 * 1000)
                        })
                })
        })
    },
    showModalEdit(a) {
        this.update({edit: {modal_show: true, data: a.data}})
    }
}