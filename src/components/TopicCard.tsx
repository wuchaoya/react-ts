/**
 * Created by chao on 2017/11/13.
 */

import * as React from 'react';

import Img from '../components/Img';
import Button from '../components/Button';
import Text from '../components/Text';
import Icon from  '../components/Icon';

interface Props {
  data: any;
}

export default class TopicCard extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    console.log(props.data);
    return (
      <div style={styles.containerStyle}>
        <div style={styles.topStyle}>
          <Img width='1rem' src={props.data.icon} />
          <div>
            <Text text={props.data.category} />
            <Icon size='0.26rem' name='icon-starton' />
          </div>
          <Button buttonText='立即玩' />
        </div>
        <Img width='6.8rem' src={props.data.cover} />
      </div>
    );
  }
}

const styles: any = {
  containerStyle: {
    backgroundColor: '#fff',
    borderRadius: '0.12rem',
    margin: '0.24rem 0.12rem 0 0.12rem',
    display: 'flex',
    flexDirection: 'column'
  },
  topStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
};
