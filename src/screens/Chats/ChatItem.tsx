import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

import type { Conversation } from '../../types/local'
import screenNames from '../../config/screenNames'
import { getChatName } from '../../utils/helpers'
import { useSelector } from 'react-redux'
import authDomain from '../../domain/auth'

type Props = {
  conversation: Conversation
}

const ChatItem = (props: Props) => {
  const navigation = useNavigation()
  const { conversation } = props
  const currentUser = useSelector(authDomain.selector.getCurrentUserSelector)

  if (conversation.messages.length === 0) {
    return null
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(screenNames.chatDetail, { id: conversation._id })}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{getChatName(conversation, currentUser)}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text numberOfLines={1} style={{ flexShrink: 1 }}>{`${conversation.messages[0].content}`}</Text>
            <Text style={styles.date}>{'・' + moment(conversation.messages[0].createdAt).format(' MMM DD')}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 15,
    paddingRight: 150,
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
  date: {
    color: 'gray',
    alignSelf: 'flex-end',
    marginLeft: 20,
  },
})

export default ChatItem
