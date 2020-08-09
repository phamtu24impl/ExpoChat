import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './root.reducer'

const composeEnhancer = compose

const middlewares = [thunk, logger]

const store = createStore(reducers, composeEnhancer(applyMiddleware(...middlewares)))
const persistor = persistStore(store)

export { store, persistor }
