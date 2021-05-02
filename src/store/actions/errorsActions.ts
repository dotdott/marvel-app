import { ERRORS } from "../reducers/errorsReducer";

export function handleErrors(code: string) {
    if (code === 'auth/email-already-in-use') {
        return ERRORS.error = 'Email já registrado';
    }

    if(code === 'auth/invalid-email'){
        return ERRORS.error = 'Digite um e-mail valido. ex usuario@gmail.com'
    }

    if(code === 'auth/weak-password'){
        return ERRORS.error = 'A senha precisa de no mínimo 6 caracteres.'
    }

    if(code === 'auth/wrong-password'){
        return ERRORS.error = 'Senha invalida.'
    }    
    
    if(code === 'auth/user-not-found'){
        return ERRORS.error = 'Não há cadastro com este e-mail.'
    }
}