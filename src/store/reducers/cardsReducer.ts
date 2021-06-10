import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  id: -1,
  image: "",
  title: "",
  content: "",
};

export const { Types, Creators } = createActions({
  setCardsStore: ["id", "image", "title", "content"],
});

const setCardsStore = (state = INITIAL_STATE, action: any) => ({
  ...state,
  id: action.id,
  image: action.image,
  title: action.title,
  content: action.content,
});

export default createReducer(INITIAL_STATE, {
  [Types.SET_CARDS_STORE]: setCardsStore,
});
