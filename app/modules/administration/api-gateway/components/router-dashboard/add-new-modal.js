import 'bootstrap/js/dist/modal'
import { randomString, showModal, hideModal, showAlertError, showToastSuccess } from 'helpers/utilities'
import components from '../globals/api-gateway-global-components'
import { CreateRoutes, ActivateRoutes } from '../../api-gateway.sdk'
import { validateNewRouter } from 'helpers/validation'

export default {
    state: {
        isprocessing: false,
        form_clientId: null,
        form_httpScheme: 'https',
        form_domain: null,
        form_middlewares: [],
        form_apiKey: null,
        need_reload: false
    },
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
            this.props.changeState(this.name, {...this.state, 'modal_show': false})
            this.$('#'+ this.ids.form).reset()
        })
    },
    submitForm() {
        try {
            let data = {}
            for (const k in this.state) {
                if (k.indexOf('form_') > -1) {
                    const field = k.replace('form_', '')
                    data[field] = this.state[k]
                }
            }
            data['domain'] = this.$('#' + this.ids.domain).value
            data['middlewares'] = data.middlewares.join(',')
            validateNewRouter(data)
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
                            })
                        return true
                    }
                    debugger
                })
        } catch (err) {
            showAlertError(err)
        }
    },
    updatePayload(key, value) {
        this.update({
            [key]: value
        })
    },
    generateRandomAPIKey () {
        const randomKey = crypto.randomUUID().toUpperCase()
        this.updatePayload('form_apiKey', randomKey)
    }
}