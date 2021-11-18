import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {userReducer} from '../reducers/reducer';

export let store = createStore(userReducer, applyMiddleware(ReduxThunk));
