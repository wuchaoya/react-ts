/**
 * Created by chao on 2017/11/8.
 */

import * as React from 'react';
import Gesture from 'rc-gesture';
import log from '../utils/DebugLog';

interface Props {
  dataList: any[];
}
export default class Swiper extends React.Component<Props, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }
  
  render () {
    log(this.props);
    let { dataList }: any = this.props;
    return (
      <Gesture>
        <div >
        {
          dataList.map((item: string, index: number) => {
            return (
              <img key={index} src={item} alt=''/>
            );
          })
        }
        </div>
      </Gesture>
    );
  }
}