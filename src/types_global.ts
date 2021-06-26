import { IUser } from "./store/types";

export interface IStateUserProps {
  stateUser: IUser;
}
export interface IStateCardProps {
  stateCards: ICards;
}

export interface ICards {
  data: [];
}

export interface IFirebaseUser {
  displayName?: string | null;
  email: string;
  photoURL?: string | null;
  uid: string;
}