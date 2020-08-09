import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Screens from './src/screens'

import { store, persistor } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Screens />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>



  )
}

export default App