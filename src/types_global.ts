import { IUser } from "./store/types";

export interface IStateUserProps {
  stateUser: IUser;
}

export interface IFirebaseUser {
  displayName?: string | null;
  email: string;
  photoURL?: string | null;
  uid: string;
}