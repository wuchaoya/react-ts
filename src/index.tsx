import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routers from './router/routers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import reducer from './reducers';
import finalCreateStore from './store/configureStore';

const store = finalCreateStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
