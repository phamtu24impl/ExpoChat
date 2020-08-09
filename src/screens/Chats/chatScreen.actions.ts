import { Alert } from 'react-native'

import type { Message } from '../../types/local'
import createApiHandler from '../../domain/auth/createApiHandler'
import { ConversationApi } from '../../api'
import appLoadingActions from '../../components/AppLoading/appLoading.actions'

const types = {
    SET_MESSAGES: 'SET_MESSAGES'
}

const setConversations = (payload: Message[]) => ({
    type: types.SET_MESSAGES,
    payload,
})

const fetchConversations = () => async (dispatch: any, getState: any) => {
    dispatch(appLoadingActions.start())
    try {
        const response = await createApiHandler(dispatch, getState)(() => ConversationApi.fetchConversations())
        console.log(response)
        dispatch(setConversations(response.data[0].messages))
    } catch (e) {
        // TODO: handle error
        console.log(e.message)
        Alert.alert(e.message, e.message)
    } finally {
        dispatch(appLoadingActions.finish())
    }
}

const actions = {
    fetchConversations,
    types
}

export default actions