import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { tournamentListReducer } from './Service/Reducers/tournament.reducer'

const reducer = combineReducers({
    tournamentList: tournamentListReducer
})

const middleware = [thunk]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
