import authDomainReducer from './auth.reducer'
import authDomainAction from './auth.actions'
import authDomainSelectors from './auth.selectors'

const authDomain = {
  reducer: authDomainReducer,
  action: authDomainAction,
  selector: authDomainSelectors,
}

export default authDomain
