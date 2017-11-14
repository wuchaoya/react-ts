/**
 * Created by chao on 2017/11/13.
 */

import * as React from 'react';

interface Props {
  buttonText: string;
  border?: string;
  radius?: string;
  color?: string;
  background?: string;
}

export default class Button extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    return (
      <div
        style={
          Object.assign(
          {},
          styles.buttonStyle,
          {border: props.border || '0.01rem solid #b5d185',
            borderRadius: props.radius || '0.26rem',
            color: props.color || '#83b233',
            background: props.background || '#fff'
          })}
      >
        <span>
          {props.buttonText}
        </span>
      </div>
    );
  }
}

const styles: any = {
  buttonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '0.52rem',
    width: '1.2rem',
    border: '0.01rem solid #b5d185',
    backgroundColor: '#fff',
    borderRadius: '0.26rem',
    color: '#83b233',
    marginTop: '0.3rem',
    position: 'absolute',
    right: '0.3rem',
    fontSize: '0.22rem'
  }
};