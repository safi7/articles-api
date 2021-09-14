import http from 'http';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import respond from 'koa-respond';
// import logRequestHandler from '../api/middleware/log-request';
// import routeNotFoundHandler from '../api/middleware/route-not-found';
import routerApi from '../routes';

/**
 * Creates and returns a new Koa application.
 * Does *NOT* call `listen`!
 *
 * @return {Koa} The configured app.
 */
export default async function createApiServer() {
  const api = new Koa();
  const server = http.createServer(api.callback());

  const router = new Router();
  router.use(routerApi.routes());
  // api.use(logRequestHandler);
  api.use(
    respond({
      autoMessage: false
    })
  );

  api.use(
    bodyParser({
      enableTypes: ['json']
    })
  );

  api.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });

  api.use(router.routes()).use(router.allowedMethods());

  // Default handler when nothing stopped the chain.
  // api.use(routeNotFoundHandler);

  return { server, api };
}
