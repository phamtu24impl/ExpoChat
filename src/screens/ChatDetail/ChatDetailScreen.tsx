import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import type { NavigationProp } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import authDomain from '../../domain/auth'

import actions from './chatDetail.actions'
import selector from './chatDetail.selectors'
import { toGiftedChatUser, toGiftedChatMessage, toLocalMessage } from '../../utils/commonParsers'
import { getChatName } from '../../utils/helpers'

export default function ChatDetailScreen({ route, navigation }: { navigation: NavigationProp<any, any>; route: any }) {
  const { id } = route.params
  const currentUser = useSelector(authDomain.selector.getCurrentUserSelector)
  const conversation = useSelector(selector.conversationSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchConversation(id))
  }, [])

  const onSend = useCallback((message) => dispatch(actions.sendMessage({ convId: id, message: message })), [dispatch])

  useLayoutEffect(() => {
    console.log('test', getChatName(conversation, currentUser))
    navigation.setOptions({
      title: getChatName(conversation, currentUser),
    })
  }, [conversation])

  return (
    <GiftedChat
      user={toGiftedChatUser(currentUser)}
      messages={conversation?.messages.map(toGiftedChatMessage)}
      onSend={(newMessages) => onSend(newMessages.map(toLocalMessage)[0])}
    />
  )
}
