import { handleErrors } from "../actions/errorsActions";

export const ERRORS = {
    error: ''
}

export const errorsReducer = (state: any = ERRORS, action: any) => {
    switch (action.type) {
        case 'SET_ERROR':
            console.log('handling error');
            return state = ERRORS;

        case 'CHANGE_ERROR':
            console.log('handling error' + action.error + state);
            return handleErrors(action.error);

        default:
            return state;
    }
}
