import { login, logout, resetPassword, Signup } from "../actions/authActions";

interface ActionsProps {
  type: string;
  email: string;
  password: string;
  code: string;
}

const authReducer = async (state: any, action: ActionsProps) => {
  switch (action.type) {
    case "SIGN_IN":
      console.log("Attempted to");
      return login(action.email, action.password);

    case "SIGN_UP":
      return await Signup(action.email, action.password);

    case "LOG_OUT":
      console.log("loggeded out");
      return logout();

    case "RESET_PASSWORD":
      console.log("reseted password");
      return resetPassword(action.email);

    default:
      return state;
  }
};

export default authReducer;
