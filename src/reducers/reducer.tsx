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
    default:
      return state;
  }
}