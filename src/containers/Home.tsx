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
    let props: any = this.props;
    return (
      <div>
        <Loading onClick={() => { log('点击'); }} state={props.homeDataState} />
        <Swiper dataList={['']} />
      </div>
    );
  }
  
  componentDidMount () {
    let props: any = this.props;
    HttpRequest.getHomeData(
      '',
      (res: any) => {
        props.setHomeData(res, -1);
        log(res);
      },
      (err: any) => {
        log(err);
        props.setHomeData(null, 1);
      }
    );
  }
}
const getLogin: any = (state: any) => {
  return {
    Login: state.update.login,
    homeDataState: state.update.homeDataState
  };
};
const func: any = { login, loginOut, setHomeData };
export default connect(getLogin, func)(Home);