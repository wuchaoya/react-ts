/**
 * Created by chao on 2017/11/15.
 */

import * as React from 'react';
require('../assets/iconFont/iconfont.js');

interface Props {
  size: string;
  color?: string;
  name: string;
}

export default class Icon extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    return (
      <svg
        style={
        {
          width: props.size,
          height: props.size,
          color: props.color || '#ff8800',
          fill: 'currentColor',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <use xlinkHref={'#' + props.name} />
      </svg>
    );
  }
  
}
