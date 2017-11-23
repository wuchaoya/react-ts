/**
 * Created by chao on 2017/11/23.
 */

import Base64 from '../../utils/Base64';

it('Base64', () => {
  expect(Base64.decode(Base64.encode('test'))).toEqual('test');
  expect(Base64.decode(Base64.encode('测试'))).toEqual('测试');
});