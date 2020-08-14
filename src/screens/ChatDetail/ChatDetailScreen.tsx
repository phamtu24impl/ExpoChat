import React, { useState, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { GiftedChat } from 'react-native-gifted-chat'
import Chat from './Chat'
import authDomain from '../../domain/auth'

export default function Example({ route }: { route: any }) {
  const { conversation } = route.params
  const currentUser = useSelector(authDomain.selector.getCurrentUserSelector)

  useEffect(() => {
    console.log('test', conversation)
  }, [])

  const onSend = useCallback((messages = []) => {

  }, [])

  return (
    <Chat conversation={conversation} currentUser={currentUser} onSend={onSend} />
  )
}
