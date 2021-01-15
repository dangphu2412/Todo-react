import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';

export const rootReducer = combineReducers({
    authentication
});