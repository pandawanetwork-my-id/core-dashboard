import 'bootstrap/js/dist/modal'
import { randomString, showModal, hideModal, showAlertError, showToastSuccess, logInfo } from 'helpers/utilities'
import components from '../globals/api-gateway-global-components'
import { CreateRoutes, ActivateRoutes } from '../../api-gateway.sdk'
import { validateNewRouter } from 'helpers/validation'

export default {
    state: {
        isprocessing: false,
        need_reload: false
    },
    forms: {},
    ids: {
        form: randomString(10, {onlyChars: true}),
        clientId: randomString(10, {onlyChars: true}),
        scheme: randomString(10, {onlyChars: true}),
        domain: randomString(10, {onlyChars: true}),
        middlewares: randomString(10, {onlyChars: true}),
        apiKey: randomString(10, {onlyChars: true}),
        modal: randomString(10, { onlyChars: true }),
    },
    components,
    onBeforeMount() {},
    onMounted() {
        this.resetForms()
    },
    onBeforeUpdate(props, state) {
        this.state = {...state, ...props.dataState}
        this.state.modal_id = this.ids.modal
        if (this.state.modal_show) {
            this.showModal()
        }
    },
    onBeforeUnmount() {},
    searchData() {},
    addNew() {},
    showModal() {
        const modal = showModal(this.state.modal_id)
        modal.on('hide.bs.modal', () => {
            this.$('#'+ this.ids.form).reset()
            this.props.changeState(this.name, {'modal_show': false, table_loadingdata: false})
        })
    },
    submitForm() {
        try {
            let data = {}
            for (const k in this.forms) {
                data[k] = this.forms[k]
            }
            data['domain'] = this.$('#' + this.ids.domain).value
            data['middlewares'] = data.middlewares.join(',')
            validateNewRouter(data)
            debugger
            CreateRoutes(data)
                .catch(err => {
                    showAlertError(err)
                    return null
                })
                .then(res => {
                    if (res) {
                        showToastSuccess('New Route Created', {width: 300})
                        this.update({need_reload: true})
                        hideModal(this.state.modal_id)
                        ActivateRoutes({clientIds: res.data.clientId})
                            .then(() => {
                                showToastSuccess('New Route Deployed', {width: 300})
                                this.props.changeState(this.name, {'modal_show': false, table_loadingdata: true})
                            })
                        return true
                    }
                    debugger
                })
        } catch (err) {
            showAlertError(err)
        }
    },
    resetForms() {
        this.forms = {
            clientId: null,
            httpScheme: 'http',
            domain: null,
            middlewares: [],
            apiKey: null,
        }
    },
    updatePayload(key, value) {
        this.forms[key] = value
        logInfo(`form payload ${key} updated to ${value}`)
    },
    generateRandomAPIKey () {
        const randomKey = crypto.randomUUID().toUpperCase()
        this.updatePayload('apiKey', randomKey)
        this.update()
    }
}