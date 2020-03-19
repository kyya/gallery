import { requestsReducer } from 'redux-saga-requests';
import { ACTIVATE_INDEX, FETCH_PHOTOS } from './action';

interface ActiveIndexState {
  activeIndex: number;
}

const initialState: ActiveIndexState = {
  activeIndex: 0,
};

export const photosReducer = requestsReducer({ actionType: FETCH_PHOTOS });

export default function root(state = initialState, action: any) {
  switch (action.type) {
    case ACTIVATE_INDEX:
      return { ...state, activeIndex: action.payload };
    default:
      return state;
  }
}
