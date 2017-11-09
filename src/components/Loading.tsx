/**
 * Created by chao on 2017/11/8.
 */

interface Props {
  state: number;
  loadingIcon?: any;
  loadingText?: string;
  errIcon?: any;
  errText?: string;
  buttonText?: string;
  onClick: any;
  containerStyle?: object;
  loadingIconStyle?: object;
  errIconStyle?: object;
  loadingTextStyle?: object;
  errTextStyle?: object;
  buttonStyle?: object;
}
import * as React from 'react';
import log from '../utils/DebugLog';

const loadingIcon: any = require('../assets/loading.gif');
const errIcon: any = require('../assets/emoji.png');
const loadingText: string = '加载中';
const errText: string = '连接失败';
const buttonText: string = '重试';

export default class Loading extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    log(props);
    return (
      <div style={Object.assign(styles.center, styles.containerStyle, props.containerStyle)}>
        {props.state === -1 ? <img style={Object.assign({}, styles.loadingIconStyle, props.loadingIconStyle)} src={props.loadingIcon || loadingIcon} alt=''/> : null}
        {props.state === -1 ? <span style={Object.assign(styles.textStyle, styles.marginTop, props.loadingTextStyle)}>{props.loadingText || loadingText}</span> : null}
        {props.state === 1 ? <img style={Object.assign({}, styles.errIconStyle, props.errIconStyle)} src={props.errIcon || errIcon} alt=''/> : null}
        {props.state === 1 ? <span style={Object.assign(styles.textStyle, styles.marginBottom, props.errTextStyle)}>{props.loadingText || errText}</span> : null}
        {props.state === 1 ? <div onClick={props.onClick} style={Object.assign({}, styles.buttonStyle, props.buttonStyle)}>{props.buttonText || buttonText}</div> : null}
      </div>
    );
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
    margin: '0',
    padding: '0'
  },
  buttonStyle: {
    height: '0.6rem',
    width: '1.4rem',
    backgroundColor: '#83b233',
    color: '#fff',
    borderRadius: '0.2rem',
    fontWeight: '400',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    backgroundColor: '#ededed',
    flexDirection: 'column',
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
