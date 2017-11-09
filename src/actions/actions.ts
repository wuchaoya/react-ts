/**
 * Created by chao on 2017/11/7.
 */

import * as actions from '../constants/actionsType';

export function login () {
  return {
    type: actions.LOGIN,
    state: true
  };
}

export function loginOut () {
  return {
    type: actions.LOGIN,
    state: false
  };
}
export function setHomeData (data:  any) {
  return {
    type: actions.SETHOMEDATA,
    data: data
  };
}