import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routers from './router/routers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Routers />, div);
});
