import {applyMiddleware, legacy_createStore as createStore} from 'redux'
import {combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import { thunk } from 'redux-thunk'

const rootReducer=combineReducers(
    {
        cash: cashReducer,
        customer: customerReducer,
    }
)
export const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// export const store=createStore(rootReducer, composeWithDevTools)
