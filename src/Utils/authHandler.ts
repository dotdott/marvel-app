import { auth } from "../firebase";
import { errorsHandler } from './errorsHandler';

const type = {
  error: "FAILURE",
  success: "SUCCESS",
};

export async function login(email: string, password: string) {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);

    return { type: type.success, value: user.user };
  } catch (err) {
    const error = errorsHandler(err.code);

    return { type: type.error, value: error };
  }
}

export async function signup(email: string, password: string) {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);

    return { type: type.success, value: user.user };
  } catch (err) {
    const error = errorsHandler(err.code);

    return { type: type.error, value: error };
  }
}

export async function logout() {
  return await auth.signOut();
}

export function resetPassword(email: string) {
  return auth.sendPasswordResetEmail(email);
}
