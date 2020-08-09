import React, { useLayoutEffect, useEffect, useCallback } from 'react'
import { Alert, Button, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'

import ConversationItem from './ChatItem'
import selectors from './chatScreen.selectors'
import actions from './chatScreen.actions'

const onButtonPress = () => {
    Alert.prompt(
        "New conversation",
        "Enter a username: ",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: username => console.log("OK Pressed, password: " + username)
            }
        ],
        "plain-text",
    );
}

const ConversationScreen = ({ navigation }: { navigation: StackNavigationProp<any, any> }) => {
    const dispatch = useDispatch()
    const fetchConversations = useCallback(() => dispatch(actions.fetchConversations()), [])
    const conversations = useSelector(selectors.conversationsSelector)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title='new' onPress={onButtonPress} />
            )
        })
    }, [])

    useEffect(() => {
        fetchConversations()
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