import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


import configureStore from './store/configureStore'

const store = configureStore(window.__INITIAL_STATE__);

import Routes from './routes';

const RootNode = document.querySelector('#root');


render(<Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>, RootNode)