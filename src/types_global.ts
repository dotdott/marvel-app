import { IUser } from "./store/types";

export interface IStateUserProps {
  stateUser: IUser;
}
export interface IStateCardProps {
  stateCards: ICards;
}

export interface ICards {
  data: [];
  offset: number;
  route: string;
  isLoading: boolean;
}

export interface IFirebaseUser {
  displayName?: string | null;
  email: string;
  photoURL?: string | null;
  uid: string;
}

export type ICard = {
  id: string;
  title: string;
  name: string;
  description: string;
  resourceURI: string;

  thumbnail: {
    path: string;
    extension: string;
  };
};
