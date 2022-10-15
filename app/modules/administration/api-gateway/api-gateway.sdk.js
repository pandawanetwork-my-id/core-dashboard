import { Request } from 'services/SDK/main'

const R = new Request()

export const GetRoutes = function (data) {
    return R.init().get('/api/v1.0/gateway/route/list', data)
}

export const CreateRoute = function (data) {
    return R.init().post('/api/v1.0/gateway/route/add', data)
}

export const TrashRoute = function (data) {
    return R.init().post('/api/v1.0/gateway/route/trash', data)
}

export const ActivateRoute = function (data) {
    return R.init().post('/api/v1.0/gateway/route/activate', data)
}

export const DeactivateRoute = function (data) {
    return R.init().post('/api/v1.0/gateway/route/deactivate', data)
}

export const ReactivateRoute = function (data) {
    return R.init().post('/api/v1.0/gateway/route/reactivate', data)
}

// clients dropdown

export const searchClient = function (opt={}) {
    return {
        method: 'GET',
        url: window.App.baseApiUrl + '/api/v1.0/clients/list',
        headers: R.init().getHeaders(),
        data: function (params) {
            return {
                search: params.term,
                limit: 10,
            }
        },
        processResults: function (res) {
            return {
                results: res.data.map(x => ({id: x.client_id, text: x.client_name}))
            }
        },
        ...opt
    }
}