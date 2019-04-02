import { Map } from 'immutable';
import { SET_MIN_VALUE, SET_MAX_VALUE, SET_MIN_MAX_VALUES } from './constants';

const initialState = new Map({
  minValue: 0,
  maxValue: 0,
});

function timelineReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MIN_VALUE:
      return state.set('minValue', action.minValue);
    case SET_MAX_VALUE:
      return state.set('maxValue', action.maxValue);
    case SET_MIN_MAX_VALUES:
      return state.set('minValue', action.minValue).set('maxValue', action.maxValue);
    default:
      return state;
  }
}

export default timelineReducer;
