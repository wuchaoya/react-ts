/**
 * Created by chao on 2017/11/23.
 */

import Transition from '../../utils/Transition';

it('Base64', () => {
  let json: any = {
    name: 'jack',
    height: 170
  }
  expect(Transition.JsonToXml(json)).toEqual('<name>jack</name><height>170</height>');
});