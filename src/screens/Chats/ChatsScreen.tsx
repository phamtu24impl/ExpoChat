import React, { useLayoutEffect, useEffect, useCallback } from 'react'
import { Alert, Button, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'

import ConversationItem from './ChatItem'
import selectors from './chatScreen.selectors'
import actions from './chatScreen.actions'
import authDomain from '../../domain/auth'
import conversationsDomain from '../../domain/conversations'

const onButtonPress = () => {
  Alert.prompt(
    'New conversation',
    'Enter a username: ',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: (username) => console.log('OK Pressed, password: ' + username),
      },
    ],
    'plain-text'
  )
}

const ConversationScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
  const dispatch = useDispatch()
  const fetchConversations = useCallback(() => dispatch(actions.fetchConversations()), [])
  const logout = useCallback(() => dispatch(authDomain.action.logout()), [])
  const conversations = useSelector(selectors.conversationsSelector)
  const conversationsTest = useSelector(conversationsDomain.selector.conversationsSelector)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="new" onPress={onButtonPress} />,
      headerLeft: () => <Button title="Log out" onPress={logout} />,
    })
  }, [])

  useEffect(() => {
    fetchConversations()
    console.log('test', conversationsTest)
  }, [])

  return (
    <FlatList
      data={conversations}
      renderItem={({ item }) => <ConversationItem message={item} />}
      keyExtractor={(item, index) => String(index)}
    />
  )
}

export default ConversationScreen
