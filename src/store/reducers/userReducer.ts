import { createActions, createReducer } from "reduxsauce";
import { IErrorStoreAction, IUser } from "../types";

const INITIAL_STATE: IUser = {
  id: "",
  name: "",
  surname: "",
  email: "",
  photo_url: "",

  save_login: false,

  error: "",
};

export const { Types, Creators } = createActions({
  setUserStore: ["id", "name", "email", "surname", "photo_url", 'save_login'],
  userErrorAuth: ["error"],
  cleanUserStore: ["id", "name", "email", "surname", "photo_url", "error", 'save_login'],
});

const setUserStore = (state = INITIAL_STATE, action: IUser) => ({
  ...state,
  id: action.id,
  name: action.name,
  surname: action.surname,
  email: action.email,
  save_login: action.save_login,
  photo_url: action.photo_url,
});

const userErrorAuth = (state = INITIAL_STATE, action: IErrorStoreAction) => ({
  ...state,
  error: action.error,
});

const cleanUserStore = (state = INITIAL_STATE, action: IUser) => ({
  ...state,
  id: "",
  name: "",
  surname: "",
  photo_url: "",
  email: "",
  save_login: false,
  error: "",
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_USER_STORE]: setUserStore,
  [Types.USER_ERROR_AUTH]: userErrorAuth,
  [Types.CLEAN_USER_STORE]: cleanUserStore,
});
