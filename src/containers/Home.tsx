/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import Swiper from '../components/Swiper';

import { login, loginOut } from '../actions/actions';

class Home extends React.Component {
  render () {
    let props: any = this.props;
    return (
      <div onClick={() => props.login()}>get{props.Login}
        <Swiper dataList={['']} />
      </div>
    );
  }
}
const getLogin: any = (state: any) => {
  return {
    Login: state.update.login
  };
};
const func: any = { login, loginOut };
export default connect(getLogin, func)(Home);