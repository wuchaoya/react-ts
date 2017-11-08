/**
 * Created by chao on 2017/11/7.
 */

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

// eslint-disable-next-line
const middleware: Array<any> = [thunk];
const finalCreactStore = compose(
  applyMiddleware(...middleware)
)(createStore);

export default finalCreactStore;