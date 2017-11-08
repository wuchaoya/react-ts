/**
 * Created by chao on 2017/11/8.
 */

export default class HttpUtils {
  static Post (path: string, parameter: any, callBackSuccess: any, callBackError: any) {
    let data: any = {};
    data.time = (new Date()).valueOf();
    fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.assign({}, parameter, data))
    }).then((response: any) => {
      return response.json();
    }).then((response: any) => {
      callBackSuccess(response);
    }).catch((error) => {
      callBackError(error);
    });
  }
}