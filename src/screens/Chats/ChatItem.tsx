import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { Conversation } from '../../types/local'
import screenNames from '../../config/screenNames'

type Props = {
  conversation: Conversation
}

const ChatItem = (props: Props) => {
  const navigation = useNavigation()
  const { conversation } = props
  if (conversation.messages.length === 0) {
    return null
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screenNames.chatDetail, { conversation: conversation })}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{conversation.members[1].username}</Text>
          <Text>{conversation.messages[0].content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'tomato',
    marginRight: 20,
  },
  info: {
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
  },
})

export default ChatItem
