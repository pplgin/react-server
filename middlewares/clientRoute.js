import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'

import configureStore from '../src/store/configureStore';
import Routes from '../src/routes';

const store = configureStore()


async function clientRoute(ctx, next) {
  if (/^\/api/.test(ctx.url)){
    return next();
  } else {
    const context = {};
    let markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.url} context={context}>
         <Routes/>
        </StaticRouter>
      </Provider>
    );
    await ctx.render('index', {
      root: markup,
      state: store.getState()
    })
  }
}

export default clientRoute