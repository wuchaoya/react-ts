/**
 * Created by chao on 2017/11/8.
 */

import * as React from 'react';
import log from '../utils/DebugLog';

interface Props {
  state: number;
  loadingIcon?: any;
  loadingText?: string;
  errIcon?: any;
  errText?: string;
  buttonText?: string;
  onClick: any;
  containerStyle?: any;
  loadingIconStyle?: any;
  errIconStyle?: any;
  loadingTextStyle?: any;
  errTextStyle?: any;
  buttonStyle?: any;
}
const loadingIcon: any = require('../assets/img/loading.gif');
const errIcon: any = require('../assets/img/emoji.png');
const loadingText: string = '加载中';
const errText: string = '连接失败';
const buttonText: string = '重试';

export default class Loading extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    log(props);
    return props.state === 0 ? null : (
      <div style={Object.assign({}, styles.containerStyle, props.containerStyle)}>
          {props.state === -1 ? <img style={Object.assign({}, styles.loadingIconStyle, props.loadingIconStyle)} src={props.loadingIcon || loadingIcon} alt=''/> : null}
          {props.state === -1 ? <span style={Object.assign(styles.marginTop, styles.textStyle, props.loadingTextStyle)}>{props.loadingText || loadingText}</span> : null}
          {props.state === 1 ? <img style={Object.assign({}, styles.errIconStyle, props.errIconStyle)} src={props.errIcon || errIcon} alt=''/> : null}
          {props.state === 1 ? <span style={Object.assign(styles.marginBottom, styles.textStyle, props.errTextStyle)}>{props.loadingText || errText}</span> : null}
          {props.state === 1 ? <div onClick={props.onClick} style={Object.assign(styles.buttonStyle, styles.center, props.buttonStyle)}>{props.buttonText || buttonText}</div> : null}
      </div>);
  }
}

const styles: any = {
  loadingIconStyle: {
    width: '0.54rem',
    height: '0.58rem'
  },
  errIconStyle: {
    width: '1.6rem',
    height: '1.6rem',
    marginBottom: '0.16rem'
  },
  textStyle: {
    fontSize: '0.28rem',
    color: '#666',
  },
  buttonStyle: {
    height: '0.6rem',
    width: '1.4rem',
    backgroundColor: '#83b233',
    color: '#fff',
    borderRadius: '0.2rem',
    fontWeight: '400'
  },
  containerStyle: {
    display: 'flex',
    backgroundColor: '#ededed',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: document.getElementsByTagName('html')[0].clientHeight
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: '0.12rem'
  },
  marginBottom: {
    marginBottom: '0.16rem'
  }
};
