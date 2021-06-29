import { all, takeLatest } from 'redux-saga/effects';

import { Types as CardsTypes } from '../reducers/cardsReducer';
import { cardsGetDataSaga } from './cardsSaga';

export default function* rootSaga() {
  yield all([
    takeLatest(CardsTypes.CARDS_STORE_REQUEST, cardsGetDataSaga),
  ])
}