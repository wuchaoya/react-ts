/**
 * Created by chao on 2017/11/22.
 */

import * as CryptoJS from 'crypto-js';

class Encryption {

  static encryptFun (data: any) {
    let key = CryptoJS.enc.Latin1.parse('IYnGgQe8jDfADSFWDbEWzdPDMEnsdDuI');
    let iv = CryptoJS.enc.Latin1.parse('XYgGnQE2jDFADSXF');
    let encrypted = CryptoJS.AES.encrypt(
      data,
      key,
      {
        iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }
  
}

export default Encryption;
