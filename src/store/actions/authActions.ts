import { auth } from '../../firebase';
import { handleErrors } from './errorsActions';

export async function login(email: string, password: string) {
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            return window.location.href = '/browse';
        }).catch(err => {
            handleErrors(err.code);
        })
}

export async function Signup(email: string, password: string) {
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            return window.location.href = '/browse';
        }).catch(err => {
            handleErrors(err.code)
        })
}

export function logout() {
    return auth.signOut();
}

export function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
}