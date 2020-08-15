import React, { useCallback, useEffect, useLayoutEffect } from 'react'
import type { NavigationProp } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import Chat from './Chat'
import authDomain from '../../domain/auth'
import { Conversation } from '../../types/local'

import actions from './chatDetail.actions'

export default function Example({ route, navigation }: { navigation: NavigationProp<any, any>; route: any }) {
  const { conversation }: { conversation: Conversation } = route.params
  const currentUser = useSelector(authDomain.selector.getCurrentUserSelector)
  const dispatch = useDispatch()

  useEffect(() => {}, [])

  const onSend = useCallback(
    (message) => dispatch(actions.sendMessage({ convId: conversation._id, message: message })),
    [dispatch]
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: conversation.members[0].username,
    })
  }, [])

  return <Chat conversation={conversation} currentUser={currentUser} onSend={onSend} />
}
