import React, { useCallback, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { Container, Form, Item, Input, Button, Text } from 'native-base'

import screenNames from '../../config/screenNames'
import AppLoading from '../../components/AppLoading/AppLoading'

import actions from './LoginScreen.actions'

const Screens = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const login = useCallback((username: string) => dispatch(actions.login(username)), [])

  return (
    <Container>
      <Form style={{ marginTop: 100 }}>
        <Item>
          <Input placeholder="username" onChangeText={(text) => setUsername(text)} />
        </Item>
        <Button style={styles.loginBtn} onPress={() => login(username)}>
          <Text>Login</Text>
        </Button>
      </Form>
    </Container>
  )
}

const styles = StyleSheet.create({
  loginBtn: {
    alignSelf: 'center',
    marginTop: 50,
  },
})

export default Screens
