/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { connect } from 'react-redux';

import Swiper from '../components/Swiper';
import Topic from '../components/HomeTopic';
import styles from '../style/containerStyle';
import FeaturedGames from '../components/FeaturedGames';

import { login, loginOut, setHomeData, getData } from '../actions/actions';
import HttpRequest from '../utils/HttpRequest';
import Loading from '../components/Loading';
import log from '../utils/DebugLog';

class Home extends React.Component {
  
  constructor(props: any) {
    super(props);
    this.state = {};
    this.getHomeData = this.getHomeData.bind(this);
  }
  
  render () {
    let props: any = this.props;
    return props.homeDataState === 0 ? (
      <div style={styles.homeStyle}>
        <Swiper
          onClick={(index: number) => { props.history.push('topic', props.homeData.banner[index].gid); }}
          showIndex={true}
          autoplay={true}
          dataList={props.homeData.banner}
        />
        <Topic
          dataList={props.homeData.dissertation}
          onClick={(index: number) => { props.history.push('topic', {did: props.homeData.dissertation[index].did}); }}
        />
        <FeaturedGames dataList={props.homeData.gameList} />
      </div>
    ) : (
      <Loading onClick={() => this.getHomeData()} state={props.homeDataState} />
    );
  }
  
  componentDidMount () {
    this.getHomeData();
  }
  
  getHomeData () {
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