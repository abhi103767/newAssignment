// NOTE: use this store variable to create a store.

import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk'
import { mainReducer } from './reducer';
import { editReducer } from './EditReducer';


const rootReducer = combineReducers({
    users : mainReducer,
    editInfo :editReducer
})

const store = createStore(rootReducer,
    composeWithDevTools(
        (applyMiddleware(thunk))
    )
)  

export default store






