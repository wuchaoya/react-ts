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

export function setHomeData (data:  any, state: number) {
  return {
    type: actions.SETHOMEDATA,
    data: data,
    state: state
  };
}

export function setTopicData (data: any, state: number) {
  return {
    type: actions.SETTOPICDATA,
    data: data,
    state: state
  };
}

export const getData: any = (state: any) => {
  return {
    Login: state.update.login,
    homeDataState: state.update.homeDataState,
    homeData: state.update.homeData,
    topicData: state.update.topicData,
    topicDataState: state.update.topicDataState,
  };
};