/**
 * Created by chao on 2017/11/7.
 */

import * as actions from '../constants/actionsType';
import initialState from '../data/initialState';

export default function update (state: any = initialState, action: any) {
  switch (action.type) {
    case actions.LOGIN:
      return Object.assign({}, state, {login: action.state});
    case actions.LOGINOUT:
      return Object.assign({}, state, {login: action.state});
    case actions.SETHOMEDATA:
      return Object.assign({}, state, {homeData: action.data, homeDataState: action.state});
    case actions.SETTOPICDATA:
      return Object.assign({}, state, {topicData: action.data, topicDataState: action.state});
    default:
      return state;
  }
}