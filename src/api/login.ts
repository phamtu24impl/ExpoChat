import type { Response } from '../types/local'

import client from './client'

const login = async (username: string): Promise<Response<any>> => {
    const response = await client.request({
        url: '/users/sign_in',
        method: 'post',
        data: { username }
    })

    return {
        data: response.data,
        metadata: {},
    }
}

export default {
    login,
}
