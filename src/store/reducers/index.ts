import { combineReducers } from 'redux';

import authReducer from './authReducer';
import cardsReducer from './cardsReducer';

import { errorsReducer } from './errorsReducer';

export default combineReducers({
    auth: authReducer,
    card: cardsReducer,
    errors: errorsReducer,
});