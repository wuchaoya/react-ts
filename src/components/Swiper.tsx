/**
 * Created by chao on 2017/11/8.
 */

import * as React from 'react';
import Gesture from 'rc-gesture';
import log from '../utils/DebugLog';

interface Props {
  dataList: any[];
  autoplay?: boolean;
  speed?: number;
  onClick?: any;
  width?: number;
  slideStyle?: any;
  showIndex?: boolean;
  component?: any;
  initialSlide?: number;
}
let time: any;
log('swiper');
export default class Swiper extends React.Component<Props, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      translate: props.initialSlide * (props.width || 7.2) || 0,
      width: props.width || 7.2,
      initialSlide: props.initialSlide || 0
    };
  }
  
  render () {
    let { dataList, slideStyle, showIndex, component }: any = this.props;
    return (
      <Gesture onSwipeLeft={() => this.ononSwipe(true)} onSwipeRight={() => this.ononSwipe(false)}>
        <div style={styles.overflow}>
          <div style={Object.assign({}, styles.container, {transform: 'translateX(' + this.state.translate + 'rem)'})}>
            {dataList.map((item: any, index: number) => {
              if (component !== undefined) {
                return component(item, index);
              }
                return (
                  <img height='100%' width='100%' style={slideStyle || styles.slide} key={index} src={item.cover} alt=''/>
                );
              })}
          </div>
          {showIndex ? <div style={styles.dotList}>
              {
                dataList.map((item: any, index: number) => {
                  return (
                    <span style={Object.assign({}, styles.dot, Math.abs(this.state.translate / this.state.width) === index ? styles.selectDotStyle : {})} key={index} />
                  );
                })
              }
            </div> : null}
        </div>
      </Gesture>
    );
  }
  
  ononSwipe (state: boolean) {
    let props = this.props;
    log(this.state.translate);
    log(-this.state.width * props.dataList.length);
    if (this.state.initialSlide === props.dataList.length) {
    return;
    }
    if (state) {
      if (this.state.translate === - this.state.width * (props.dataList.length - 1 )) { return; }
      this.setState({
        translate: ((this.state.initialSlide + 1) *( - this.state.width )),
        initialSlide: this.state.initialSlide + 1
      });
    } else {
      if (this.state.initialSlide === 0) { return; }
      this.setState({
        translate: ((this.state.initialSlide - 1) *( - this.state.width )),
        initialSlide: this.state.initialSlide - 1
      });
    }
  }
  
  autoplay () {
    let props: any = this.props;
    if (!this.props.autoplay) {
      return;
    }
    time = window.setInterval(
      () => {
        if (this.state.translate === - this.state.width * (props.dataList.length - 1 )) {
          this.setState({
            translate: 0
          });
          return;
        }
        this.setState({
          translate: (this.state.translate * 100 - this.state.width * 100) / 100
        }); },
      props.speed || 2500);
  }
  
  componentDidMount () {
    this.autoplay();
  }
  
  componentWillUnmount () {
    window.clearInterval(time);
  }
}

const styles: any = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    transition: 'all 0.3s'
  },
  slide: {
    width: '7.2rem',
    height: '2.88rem'
  },
  spanStyle: {
    display: 'inline-block',
    width: '0.18rem',
    height: '0.18rem',
    borderRadius: '50%',
    backgroundColor: '#fff',
    marginLeft: '0.1rem',
    opacity: '0.4'
  },
  spanList: {
    position: 'absolute',
    right: '0.3rem',
    bottom: '0.18rem'
  },
  selectStyle: {
    backgroundColor: '#c2ff1d',
    opacity: '1'
  },
  overflow: {
    overflow: 'hidden',
    position: 'relative'
  },
  dot: {
    display: 'inline-block',
    width: '0.18rem',
    height: '0.18rem',
    borderRadius: '50%',
    backgroundColor: '#fff',
    marginLeft: '0.1rem',
    opacity: '0.4'
  },
  dotList: {
    position: 'absolute',
    right: '0.3rem',
    bottom: '0.18rem'
  },
  selectDotStyle: {
    backgroundColor: '#c2ff1d',
    opacity: '1'
  }
};