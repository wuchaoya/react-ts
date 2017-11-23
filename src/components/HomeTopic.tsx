/**
 * Created by chao on 2017/11/11.
 */

import * as React from 'react';
import Text from '../components/Text';
import Swiper from '../components/Swiper';

interface Props {
  textStyl?: any;
  size?: number;
  color?: number;
  numberOfLines?: number;
  margin?: string;
  dataList?: any [];
  onClick?: any;
}

export default class Topic extends React.Component<Props, any> {
  
  constructor(props: any) {
    super(props);
    this.renderSlide = this.renderSlide.bind(this);
  }
  
  render () {
    let props: any = this.props;
    return (
    <div style={styles.containerStyle}>
      <Text padding='0.24rem 0 0 0' color='#000' size={0.3} text='游戏专题' />
      <Text margin='0.24rem 0 0.1rem 0' color='#999' size={0.26} text='ACT ACT 我们为你挑好了' />
      <Swiper width={6.64} component={this.renderSlide} showIndex={false} autoplay={false} dataList={props.dataList} />
    </div>
    );
  }
  
  renderSlide (item: any, index: number) {
    let props: any = this.props;
    return (
      <div onClick={() => props.onClick(index)} style={styles.sildeaStyle} key={index}>
        <img style={styles.imgStyle} src={item.cover} alt={item.title}/>
        <span style={styles.textStyle}>{item.title}</span>
      </div>
    );
  }
  
}

const styles: any = {
  containerStyle: {
    backgroundColor: '#fff',
    marginTop: '0.16rem',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '0.24rem'
  },
  imgStyle: {
    width: '6.4rem',
    height: '3.6rem'
  },
  sildeaStyle: {
    display: 'flex',
    width: '6.64rem',
    marginRight: '0.24rem',
    flexDirection: 'column',
  },
  textStyle: {
    height: '0.8rem',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.3rem',
    color: '#333'
  }
};