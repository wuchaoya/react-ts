/**
 * Created by chao on 2017/11/7.
 */

import * as actions from '../constants/actionsType';

export default class Actions {
  static login () {
    return {
      type: actions.LOGIN,
      state: true
    };
  }
  static loginOut () {
    return {
      type: actions.LOGINOUT,
      state: false
    };
  }
}
