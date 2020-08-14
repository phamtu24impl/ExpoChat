import reducer from './conversations.reducer'
import action from './conversations.actions'
import selectors from './conversations.selectors'

const conversationsDomain = {
  reducer: reducer,
  action: action,
  selector: selectors,
}

export default conversationsDomain
