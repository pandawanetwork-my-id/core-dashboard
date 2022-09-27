import { Request } from 'services/SDK/main'

const R = new Request()

// AGENTS

export const LoginAgent = function (data) {
    return R.init().post('/api/v1.0/auth/login', data)
}