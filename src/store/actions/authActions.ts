import { auth } from "../../firebase";
import { handleErrors } from "../../Utils/handleErrors";

const type = {
  error: "FAILURE",
  success: "SUCCESS",
};

export async function login(email: string, password: string) {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);

    return { type: type.success, value: user.user };
  } catch (err) {
    const error = handleErrors(err.code);

    return { type: type.error, value: error };
  }
}

export async function Signup(email: string, password: string) {
  try {
    const user = auth.createUserWithEmailAndPassword(email, password);

    return { type: type.success, value: user };
  } catch (err) {
    const error = handleErrors(err.code);

    return { type: type.error, value: error };
  }

  //   return (window.location.href = "/browse");
}

export async function logout() {
  return await auth.signOut();
}

export function resetPassword(email: string) {
  return auth.sendPasswordResetEmail(email);
}
