import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMidlleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMidlleware();

export default (initialState = {}) => {
  const middleware = [sagaMiddleware];

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState, composeEnhancers);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
