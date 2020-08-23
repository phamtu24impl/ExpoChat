import { User, Message } from '../types/local'

export const toGiftedChatUser = (user: User) => ({
  _id: user._id,
  name: user.username,
  avatar: '',
})

export const toGiftedChatMessage = (message: Message) => ({
  _id: message._id,
  text: message.content,
  createdAt: message.createdAt,
  user: toGiftedChatUser(message.sender),
})

export const toLocalUser = (user: any) => ({
  _id: user._id,
  username: user.name,
})

export const toLocalMessage = (message: any) => ({
  _id: message._id,
  content: message.text,
  createdAt: message.createdAt,
  sender: toLocalUser(message.user),
})
