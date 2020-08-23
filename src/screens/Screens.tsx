/**
 * @flow
 */

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import io from 'socket.io-client'

import authDomain from '../domain/auth'
import screenNames from '../config/screenNames'
import { navigationRef } from '../utils/RootNavigation'

import LoginScreen from './Login'
import ChatsScreen from './Chats'
import ChatDetailScreen from './ChatDetail'
import env from '../config/env'
import Socket from '../config/socket'

const Stack = createStackNavigator()

const Screens = () => {
  const isAuthenticated = useSelector(authDomain.selector.getIsAuthenticated)
  const token = useSelector(authDomain.selector.getAuthHeader)

  useEffect(() => {
    if (isAuthenticated) {
      Socket.init({ token })
    }
  }, [isAuthenticated])

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {isAuthenticated ? (
            <>
              <Stack.Screen name={screenNames.chats} component={ChatsScreen} />
              <Stack.Screen name={screenNames.chatDetail} component={ChatDetailScreen} />
            </>
          ) : (
            <Stack.Screen name={screenNames.login} component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default Screens
