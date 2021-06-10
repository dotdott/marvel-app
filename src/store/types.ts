export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  photo_url: string;

  error: string;
}

export type IErrorStoreAction = {
  error: string;
};
