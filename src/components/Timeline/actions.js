import { SET_MIN_VALUE, SET_MAX_VALUE, SET_MIN_MAX_VALUES, ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from './constants';

const setMinValue = minValue => ({ type: SET_MIN_VALUE, minValue });
const setMaxValue = maxValue => ({ type: SET_MAX_VALUE, maxValue });
const setMinMaxValues = (minValue, maxValue) => ({ type: SET_MIN_MAX_VALUES, minValue, maxValue });

const addItem = () => ({ type: ADD_ITEM });
const removeItem = itemId => ({ type: REMOVE_ITEM, itemId });
const editItem = (itemId, min, max) => ({ type: EDIT_ITEM, itemId, min, max });

export { setMinValue, setMaxValue, setMinMaxValues, addItem, removeItem, editItem };
