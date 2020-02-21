import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_ERROR,
  POST_DATA,
  POST_SUCCESS,
  POST_ERROR
} from "../actions/index";

export const initialState = {
  playersArray: [],
  isFetching: false,
  isPosting: false,
  errors: ""
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return { ...state, playersArray: [action.payload], isFetching: false };
    case FETCH_ERROR:
      return { ...state, errors: [action.payload], isFetching: false };
    case POST_DATA:
      return { ...state, isPosting: true };
    case POST_SUCCESS:
      return {
        ...state,
        playersArray: [...state.playersArray, action.payload],
        isPosting: false
      };
    case POST_ERROR:
      return { ...state, errors: action.payload, isPosting: false };
    default:
      return state;
  }
};
