import React, { memo, useMemo, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { User, Message, Conversation } from '../../types/local'

const toGiftedChatUser = (user: User) => ({
    _id: user._id,
    name: user.username,
    avatar: '',
})

const toGiftedChatMessage = (message: Message) => ({
    _id: message._id,
    text: message.content,
    createdAt: message.createdAt,
    user: toGiftedChatUser(message.sender),
})

const toLocalUser = (user: User) => ({
    id: user._id,
    username: user.username,
})

const toLocalMessage = (message: Message) => ({
    id: message._id,
    content: message.content,
    createdAt: message.createdAt,
    sender: toLocalUser(message.sender),
})

function Chat({
    conversation,
    currentUser,
    onSend
}: {
    conversation: Conversation,
    currentUser: User,
    onSend: (message?: any) => void
}) {
    const messages = useMemo(() => conversation.messages.map(toGiftedChatMessage), [conversation.messages])
    const user = useMemo(() => toGiftedChatUser(currentUser), [currentUser])
    const onSendMessage = useCallback((newMessages) => {
        onSend(newMessages.map(toLocalMessage)[0])
    }, [])

    return <GiftedChat messages={messages} onSend={onSendMessage} user={user} />
}

export default memo(Chat)
