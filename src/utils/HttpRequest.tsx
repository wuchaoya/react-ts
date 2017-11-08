/**
 * Created by chao on 2017/11/8.
 */

import HttpUtils from './HttpUtils';

export default class HttpRequest {
  static getHomeData (parameter: any, callbackSuccess: any, callbackError: any) {
    HttpUtils.Post(
      '/v2/homepage',
      parameter,
      (response: any) => {
        if (response.state === 200 && response.data) {
          callbackSuccess(response.data);
        } else {
          callbackError(response.state);
        }
      },
      (error: any) => {
        callbackError(error);
      }
    );
  }
}