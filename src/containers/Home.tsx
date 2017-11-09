/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import Swiper from '../components/Swiper';

import { login, loginOut, setHomeData } from '../actions/actions';
import HttpRequest from '../utils/HttpRequest';
import Loading from '../components/Loading';
import log from '../utils/DebugLog';

class Home extends React.Component {
  
  render () {
    
    return (
      <div>
        <Loading onClick={() => { log('点击'); }} errText='加载失败' state={1} />
        <Swiper dataList={['']} />
      </div>
    );
  }
  
  componentDidMount () {
    let props: any = this.props;
    HttpRequest.getHomeData(
      '',
      (res: any) => {
        props.setHomeData(res);
        log(res);
      },
      (err: any) => {
        log(err);
      }
    );
  }
}
const getLogin: any = (state: any) => {
  return {
    Login: state.update.login
  };
};
const func: any = { login, loginOut, setHomeData };
export default connect(getLogin, func)(Home);