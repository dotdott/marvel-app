import { call, put } from "redux-saga/effects";
import { api, baseURL } from "../../api/api";
import { Types } from "../reducers/cardsReducer";

interface IResponse{
  data: {
    data: {
      results: [];
    }
  },
}

export function* cardsGetDataSaga(action: any){
  try {
   const response: IResponse = yield call(() => {
      return api.get(`${baseURL}/${action.route}`, {
        params: {
          offset: action.offset,
        }
      })
    })

    const data = response.data.data.results;

   yield put({type: Types.CARDS_STORE_SUCCESS, data})
  } catch(error){
    console.log(error)

    yield put({type: Types.CARDS_STORE_FAILURE, error: error.message})
  }
}