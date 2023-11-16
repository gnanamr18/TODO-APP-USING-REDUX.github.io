import {configureStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

import rootreducer from './reducers/index'



const store = configureStore({
   reducer: rootreducer,
   middleware: thunk,
   DevTools: composeWithDevTools
})

export default store