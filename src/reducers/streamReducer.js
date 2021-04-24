import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

const mapKeys = (arr) => {
  const newObj = {};
  arr.forEach((obj) => {
    newObj[obj.id] = obj;
  });
  return newObj;
};

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(action.payload) };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      return delete { ...state }[action.payload];

    default:
      return state;
  }
};

export default streamsReducer;
