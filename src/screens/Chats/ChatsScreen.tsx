import React, { useLayoutEffect, useEffect, useCallback } from 'react'
import { Alert, Button, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'

import ConversationItem from './ChatItem'
import selectors from './chatScreen.selectors'
import authDomain from '../../domain/auth'
import conversationsDomain from '../../domain/conversations'

const ConversationScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
  const dispatch = useDispatch()
  const fetchConversations = useCallback(() => dispatch(conversationsDomain.action.fetchConversations()), [])
  const logout = useCallback(() => dispatch(authDomain.action.logout()), [])
  const conversations = useSelector(selectors.conversationsSelector)

  const onButtonPress = useCallback(() => {
    Alert.prompt(
      'New conversation',
      'Enter a username: ',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (username) => {
            dispatch
          },
        },
      ],
      'plain-text'
    )
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="new" onPress={onButtonPress} />,
      headerLeft: () => <Button title="Log out" onPress={logout} />,
    })
  }, [])

  useEffect(() => {
    fetchConversations()
  }, [])

  return (
    <FlatList
      data={conversations}
      renderItem={({ item }) => <ConversationItem conversation={item} />}
      keyExtractor={(item, index) => String(index)}
    />
  )
}

export default ConversationScreen
