import { call, put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from './action';
import { getRandomPhotos } from '../utils/request';

function* fetchPhotos(action: any) {
   try {
      const stringOfPhotos = window.localStorage.getItem('photos');
      let listOfPhotos = [];
      if (stringOfPhotos) {
        listOfPhotos = JSON.parse(stringOfPhotos);
        console.log('Using LocalStorage\'s Photos: ', listOfPhotos.length);
      } else {
        listOfPhotos = yield call(getRandomPhotos, action.payload.limit);
      }
      yield put({ type: FETCH_PHOTOS_SUCCESS, payload: listOfPhotos });
      window.localStorage.setItem('photos', JSON.stringify(listOfPhotos));
   } catch (error) {
      yield put({ type: FETCH_PHOTOS_FAILURE, message: error.message });
   }
}

function* rootSaga() {
  yield takeEvery(FETCH_PHOTOS_REQUEST, fetchPhotos);
}

export default rootSaga;
