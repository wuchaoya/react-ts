/**
 * Created by chao on 2017/11/7.
 */

import * as React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render () {
    return (
      <div>get</div>
    );
  }
}
const getLogin: any = (state: any) => {
  return {
    login: state.update.login
  };
};

export default connect(getLogin)(Home);