/**
 * Created by chao on 2017/11/13.
 */

import * as React from 'react';

interface Props {
  src: string;
  alt?: string;
  onClick?: any;
  width: string;
  height?: string;
  radius?: string;
  border?: string;
  margin?: string;
  padding?: string;
}
export default class Img extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    return (
      <div
        style={
          {
            width: props.width,
            height: props.height,
            borderRadius: props.radius || '0',
            border: props.border || 'none',
            margin: props.margin || '0',
            padding: props.padding || '0',
            fontSize: '0'
          }}
        onClick={props.onClick}
      >
        <img width='100%' src={props.src} alt={props.alt || ''} />
      </div>
    );
  }
}
