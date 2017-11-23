/**
 * Created by chao on 2017/11/11.
 */

import * as React from 'react';
import { connect } from 'react-redux';

import Img from '../components/Img';
import Text from '../components/Text';
import TopicCard from '../components/TopicCard';
import containerStyle from '../style/containerStyle';

import { login, setTopicData, getData } from '../actions/actions';
import HttpRequest from '../utils/HttpRequest';
import Loading from '../components/Loading';
import log from '../utils/DebugLog';

class Topic extends React.Component {
  
  render () {
    let props: any = this.props;
    return props.topicDataState === 0 ? (
      <div style={containerStyle.topicStyle.background}>
        <Img src={props.topicData.cover} width='7.2rem' />
        <Text style={containerStyle.topicStyle.topTextStyle} text={props.topicData.title} size={0.24} color='#666' padding='0.32rem 0.25rem 0.25rem 0.16rem'/>
        {props.topicData.game.map((item: any, index: number) => { return <TopicCard data={item} key={index} />; })}
      </div>) : <Loading onClick={() => { console.log(''); }} state={props.topicDataState} />;
  }
  
  componentDidMount () {
    this.getTopicData();
  }
  
  getTopicData () {
    let props: any = this.props;
    HttpRequest.getGameDissertationData(
      { did: props.location.state.did },
      (res: any) => {
        props.setTopicData(res, 0);
      },
      (err: any) => {
        log(err);
        props.setTopicData(null, 1);
      }
    );
  }
}
const func: any = { login, setTopicData };
export default connect(getData, func)(Topic);