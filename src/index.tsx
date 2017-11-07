import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routers from './router/routers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routers />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
