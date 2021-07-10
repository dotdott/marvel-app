import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  isLoading: false,

  data: [],
  offset: 0,
  route: "/characters",
  selectedCard: {},
  showModal: false,

  error: {},
};

export const { Types, Creators } = createActions({
  CardsStoreRequest: ["data", "isLoading", "offset", "route"],
  CardsStoreSuccess: ["data", "isLoading"],
  CardsStoreFailure: ["error", "isLoading"],

  SetSelectedCard: ["selectedCard", "showModal"],
});

const SetSelectedCard = (state = INITIAL_STATE, action: any) => ({
  ...state,
  selectedCard: action.selectedCard,
  showModal: action.showModal,
});

const CardsStoreRequest = (state = INITIAL_STATE, action: any) => ({
  ...state,
  isLoading: true,
  data: action.data,
  offset: action.offset,
  route: action.route,
});

const CardsStoreSuccess = (state = INITIAL_STATE, action: any) => ({
  ...state,
  data: action.data,
  isLoading: false,
});

const CardsStoreFailure = (state = INITIAL_STATE, action: any) => ({
  ...state,
  error: action.error,
  isLoading: false,
});

export default createReducer(INITIAL_STATE, {
  [Types.CARDS_STORE_REQUEST]: CardsStoreRequest,
  [Types.CARDS_STORE_SUCCESS]: CardsStoreSuccess,
  [Types.CARDS_STORE_FAILURE]: CardsStoreFailure,
  [Types.SET_SELECTED_CARD]: SetSelectedCard,
});
