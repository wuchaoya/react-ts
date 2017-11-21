/**
 * Created by chao on 2017/11/21.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, configure, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import Button from '../../components/Button';

configure({ adapter: new Adapter() });


it('静态渲染', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button buttonText='按钮' />, div);
});

it('完整渲染', () => {
  const wrapper:any = shallow(<Button buttonText='按钮' />);
  /**
   * 测试 按钮 文字是否真正传入
   */
  expect( wrapper.find('span').childAt(0).text()).toEqual('按钮');
});

it('浅渲染', () => {
  mount(<Button buttonText='按钮' />);
});