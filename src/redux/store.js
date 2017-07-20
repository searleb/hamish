import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import * as reducers from './modules'


// Create Redux Store
const store = createStore(
  combineReducers({
    ...reducers,
    form: formReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ),
)

export default store
