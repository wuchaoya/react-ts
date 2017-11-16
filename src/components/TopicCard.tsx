/**
 * Created by chao on 2017/11/13.
 */

import * as React from 'react';

import Img from '../components/Img';
import Button from '../components/Button';
import Text from '../components/Text';
import StarRating from '../components/StarRating';
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
          <Img radius='0.12rem' width='0.74rem' margin='0.2rem 0.18rem 0.2rem 0.2rem' src={props.data.icon} />
          <div>
            <Text margin='0.2rem 0 0.06rem 0' size={0.28} text={props.data.name} />
            <StarRating number={1} />
          </div>
          <Button buttonText='立即玩' />
        </div>
        <Img width='6.8rem' src={props.data.cover} />
        <Text text={props.data.game_summary} size={0.24} margin='0.36rem 0.2rem 0 0.2rem' padding='0 0 0.36rem 0' />
      </div>
    );
  }
}
const styles: any = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    backgroundColor: '#fff',
    borderRadius: '0.12rem',
    margin: '0.24rem 0.12rem 0 0.12rem',
    
  },
  topStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
};
