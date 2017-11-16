/**
 * Created by chao on 2017/11/15.
 */

import * as React from 'react';
import Icon from '../components/Icon';

interface Props {
  number: number;
}

export default class StarRating extends React.Component<Props, any> {
  
  render () {
    return (
      <div>
        <Icon size='0.26rem' name='icon-starton' />
        <Icon size='0.26rem' name='icon-starton' />
        <Icon size='0.26rem' name='icon-starton' />
      </div>
    );
  }
}