import { combineReducers } from 'redux';

import timeline from 'components/Timeline/reducer';

const rootReducer = combineReducers({
  timeline,
});

export default rootReducer;
