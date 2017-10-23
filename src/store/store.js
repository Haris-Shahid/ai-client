import thunk from 'redux-thunk' ;
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/authreducers'
// import Routing from '../routing'
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store ;