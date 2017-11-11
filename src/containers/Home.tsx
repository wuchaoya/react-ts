/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { connect } from 'react-redux';

import Swiper from '../components/Swiper';
import Topic from '../components/Topic';
import styles from '../style/containerStyle';

import { login, loginOut, setHomeData, getData } from '../actions/actions';
import HttpRequest from '../utils/HttpRequest';
import Loading from '../components/Loading';
import log from '../utils/DebugLog';

class Home extends React.Component {
  
  render () {
    let props: any = this.props;
    return props.homeDataState === 0 ? (
      <div style={styles.homeStyle}>
        <Swiper showIndex={true} autoplay={true} dataList={props.homeData.banner} />
        <Topic dataList={props.homeData.dissertation} />
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