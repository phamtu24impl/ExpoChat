/**
 * @flow
 */

// import { combineReducers } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist'
import type { PersistConfig } from 'redux-persist/lib/types'
import { combineReducers } from 'redux'
import appLoadingReducer from '../components/AppLoading/appLoading.reducer'
import chatScreenReducer from '../screens/Chats/chatScreen.reducer'

import rootActions from './root.actions'
import authDomainReducer from '../domain/auth/auth.reducer'

const storage = AsyncStorage

const persistKeys = {
  root: 'root',
  auth: 'auth',
}

const authPersistConfig = {
  key: persistKeys.auth,
  storage,
  blacklist: [],
}

const appReducer = combineReducers({
  appLoading: appLoadingReducer,
  auth: persistReducer(authPersistConfig, authDomainReducer),
  screens: combineReducers({
    chat: chatScreenReducer
  })
})

export function rootReducer(state: any, action: any) {
  switch (action.type) {
    case rootActions.types.RESET_STATE: {
      Object.values(persistKeys).forEach((persistKey) => {
        storage.removeItem(`persist:${persistKey}`).catch(() => { })
      })
      return appReducer(undefined, action)
    }
    default: {
      return appReducer(state, action)
    }
  }
}

const persistConfig: PersistConfig<any> = {
  key: persistKeys.root,
  storage,
  whitelist: [],
}

export default persistReducer<any, any>(persistConfig, rootReducer)
