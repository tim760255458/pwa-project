import fetch from '../utils/fetch'

export function test (params) {
    return fetch({
        url: '/login',
        data: params,
        method: 'post'
    })
} 