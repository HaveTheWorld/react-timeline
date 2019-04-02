import { SET_MIN_VALUE, SET_MAX_VALUE, SET_MIN_MAX_VALUES } from './constants';

const setMinValue = minValue => ({ type: SET_MIN_VALUE, minValue });
const setMaxValue = maxValue => ({ type: SET_MAX_VALUE, maxValue });
const setMinMaxValues = (minValue, maxValue) => ({ type: SET_MIN_MAX_VALUES, minValue, maxValue });

export { setMinValue, setMaxValue, setMinMaxValues };
