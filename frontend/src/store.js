import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { tournamentStore } from './Service/Store/tournament.store'
import { teamStore } from './Service/Store/team.store'
import { userStore } from './Service/Store/user.store'

const reducer = combineReducers({
    ...tournamentStore,
    ...teamStore,
    ...userStore
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
