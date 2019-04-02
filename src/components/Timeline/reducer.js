import uuid from 'uuid/v4';
import { Map, List } from 'immutable';
import { SET_MIN_VALUE, SET_MAX_VALUE, SET_MIN_MAX_VALUES, ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from './constants';

const initialState = new Map({
  minValue: '0',
  maxValue: '100',
  items: new List(),
});

const getNewItem = () => {
  const id = uuid();
  return new Map({ id, value: new Map() });
};

function timelineReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MIN_VALUE:
      return state.set('minValue', action.minValue);
    case SET_MAX_VALUE:
      return state.set('maxValue', action.maxValue);
    case SET_MIN_MAX_VALUES:
      return state.set('minValue', action.minValue).set('maxValue', +action.maxValue);
    case ADD_ITEM:
      return state.update('items', items => items.push(getNewItem()));
    case REMOVE_ITEM:
      return state.update('items', items => items.filter(item => item.get('id') !== action.itemId));
    case EDIT_ITEM:
      return state.update('items', items =>
        items.map(item => {
          if (item.get('id') === action.itemId) {
            return item.setIn(['value', 'min'], action.min).setIn(['value', 'max'], action.max);
          }
          return item;
        })
      );
    default:
      return state;
  }
}

export default timelineReducer;
