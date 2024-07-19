import {legacy_createStore as createStore} from 'redux'
import {combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'

const rootReducer=combineReducers(
    {
        cash: cashReducer,
        customer: customerReducer,
    }
)
export const store=createStore(rootReducer, composeWithDevTools())
// export const store=createStore(rootReducer, composeWithDevTools)
