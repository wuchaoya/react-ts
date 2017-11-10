/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { connect } from 'react-redux';
import Swiper from '../components/Swiper';

import { login, loginOut, setHomeData, getData } from '../actions/actions';
import HttpRequest from '../utils/HttpRequest';
import Loading from '../components/Loading';
import log from '../utils/DebugLog';

class Home extends React.Component {
  
  render () {
    let props: any = this.props;
    return props.homeDataState === 0 ? (
      <div>
        <Swiper showIndex={true} autoplay={true} dataList={props.homeData.banner} />
      </div>
    ) : (
      <Loading onClick={() => { log('点击'); }} state={props.homeDataState} />
    );
  }
  
  componentDidMount () {
    let props: any = this.props;
    HttpRequest.getHomeData(
      '',
      (res: any) => {
        props.setHomeData(res, 0);
        log(res);
      },
      (err: any) => {
        log(err);
        props.setHomeData(null, 1);
      }
    );
  }
}

const func: any = { login, loginOut, setHomeData };
export default connect(getData, func)(Home);