/**
 * Created by chao on 2017/11/11.
 */

import * as React from 'react';

interface Props {
  text: string;
  textStyl?: any;
  size?: number;
  color?: string;
  numberOfLines?: number;
  margin?: string;
  padding?: string;
  style?: any;
}

export default class Text extends React.Component<Props, any> {
  
  render () {
    let props: any = this.props;
    return (
      <div style={props.style}>
        <span
          style={
            Object.assign
            (
              JSON.parse(JSON.stringify(styles.textStyle)),
              {fontSize: props.size + 'rem' || '0.16rem',
                color: props.color || '#000',
                WebkitLineClamp: String(props.numberOfLines) || 'none',
                margin: props.margin || '0',
                padding: props.padding || '0'
              },
              (props.textStyle || {})
            )
          }
        >
          {props.text}
        </span>
      </div>
      
    );
  }
}

const styles: any = {
  textStyle: {
    fontSize: '0.16rem',
    color: '#000',
    fontWeight: '400',
    margin: '0',
    padding: '0',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 'none',
  }
};