import React, { memo, useMemo, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Conversation, User } from '../../types/local'

const toGiftedChatUser = (user: any) => {
  console.log(user)
  return {
    _id: user.id,
    name: user.username,
    avatar: '',
  }
}

const toGiftedChatMessage = (message: any) => ({
  _id: message._id,
  text: message.content,
  createdAt: message.createdAt,
  user: toGiftedChatUser(message.sender),
})

const toLocalUser = (user: any) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: user._id,
  username: user.name,
})

const toLocalMessage = (message: any) => ({
  // eslint-disable-next-line no-underscore-dangle
  id: message._id,
  content: message.text,
  createdAt: message.createdAt,
  sender: toLocalUser(message.user),
})

function Chat({
  conversation,
  currentUser,
  onSend,
}: {
  conversation: Conversation
  currentUser: User
  onSend: (message: any) => void
}) {
  const messages = useMemo(() => conversation.messages.map(toGiftedChatMessage), [conversation.messages])
  const user = useMemo(() => toGiftedChatUser(currentUser), [currentUser])
  const onSendMessage = useCallback((newMessages) => {
    onSend(newMessages.map(toLocalMessage)[0])
  }, [])

  return <GiftedChat messages={messages} onSend={onSendMessage} user={user} />
}

export default memo(Chat)
