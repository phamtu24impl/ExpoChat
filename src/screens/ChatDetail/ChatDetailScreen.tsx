import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StackNavigationProp } from '@react-navigation/stack'
import io from "socket.io-client";


export default function Example({ navigation }: { navigation: StackNavigationProp<any, any> }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = io('http://192.168.0.101:3000', {
            query: {
                userId: '5f2fc88f36c7540029883a28',
            },
        })
        socket.emit('joinConversation', { id: '5f2fc88f36c7540029883a28' })
    }, [])




    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}