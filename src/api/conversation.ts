import type { Response, Message, Conversation } from '../types/local'

import client from './client'

const createNewConversation = async (username: string): Promise<Response<Conversation>> => {
  const response = await client.request<any>({
    url: '/conversations',
    method: 'post',
    data: { members: username },
  })

  return {
    data: response.data,
    metadata: {},
  }
}

const fetchConversations = async (): Promise<Response<Conversation[]>> => {
  const response = await client.request<any>({
    url: '/conversations',
    method: 'get',
  })

  return {
    data: response.data,
    metadata: {},
  }
}

const fetchConversation = async (id: string): Promise<Response<any>> => {
  const response = await client.request<any>({
    method: 'get',
    url: `/conversations/${id}/messages`,
  })

  return {
    data: response.data,
    metadata: {},
  }
}

const createNewMessage = async (conversationId: string, message: Message) => {
  const response = await client.request({
    method: 'post',
    url: `/conversations/${conversationId}/messages`,
    data: {
      content: message.content,
    },
  })

  return {
    data: response.data,
    metadata: {},
  }
}

export default {
  createNewConversation,
  fetchConversations,
  createNewMessage,
  fetchConversation,
}
