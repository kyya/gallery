import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-fetch';

// import { getRandomPhotos } from '../utils/request';
// function* fetchPhotos(action: any) {
//   try {
//     const stringOfPhotos = window.localStorage.getItem('photos');
//     let listOfPhotos = [];
//     if (stringOfPhotos) {
//       listOfPhotos = JSON.parse(stringOfPhotos);
//       console.log("Using LocalStorage's Photos: ", listOfPhotos.length);
//     } else {
//       listOfPhotos = yield call(getRandomPhotos, action.payload.limit);
//     }
//     yield put({ type: FETCH_PHOTOS_SUCCESS, payload: listOfPhotos });
//     window.localStorage.setItem('photos', JSON.stringify(listOfPhotos));
//   } catch (error) {
//     yield put({ type: FETCH_PHOTOS_FAILURE, message: error.message });
//   }
// }

// function* rootSaga() {
//   yield takeEvery(FETCH_PHOTOS_REQUEST, fetchPhotos);
// }

function* rootSaga() {
  yield createRequestInstance({
    driver: createDriver(window.fetch, {
      baseURL: 'https://api.unsplash.com',
    }),
  });
  yield watchRequests();
}

export default rootSaga;
