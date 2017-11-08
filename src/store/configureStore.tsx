/**
 * Created by chao on 2017/11/7.
 */

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import * as Logger from 'redux-logger';
const loggerMiddleware: any = Logger.createLogger();
const middleware: Array<any> = [thunk, loggerMiddleware];
const finalCreactStore = compose(
  applyMiddleware(...middleware)
)(createStore);

export default finalCreactStore;