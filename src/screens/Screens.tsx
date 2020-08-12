/**
 * @flow
 */

import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Button, Alert } from 'react-native'

import authDomain from '../domain/auth'
import screenNames from '../config/screenNames'

import LoginScreen from './Login'
import ChatsScreen from './Chats'
import ChatDetailScreen from './ChatDetail'

const Stack = createStackNavigator()

const Screens = () => {
  const isAuthenticated = useSelector(authDomain.selector.getIsAuthenticated)
  return (
    <>
      <NavigationContainer>
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
