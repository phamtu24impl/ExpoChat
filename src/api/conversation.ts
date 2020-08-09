import type { Response, Message, Conversation } from '../types/local'

import client from './client'

const createNewConversation = async (username: string): Promise<Response<any>> => {
    const response = await client.request({
        url: '/conversations',
        method: 'post',
        data: { username }
    })

    return {
        data: response.data,
        metadata: {},
    }
}

const fetchConversations = async (): Promise<Response<Conversation>> => {
    const response = await client.request<Conversation>({
        url: '/conversations',
        method: 'get',
    })

    return {
        data: response.data,
        metadata: {},
    }
}

export default {
    createNewConversation,
    fetchConversations
}
