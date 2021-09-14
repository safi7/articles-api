import Router from 'koa-router';

import controller from '../controllers/articles';

const router = new Router();

router.get(`/`, ctx => ctx.ok('Up and running'));
router.get(`/articles`, controller.fetchArticles.bind(controller));


export default router;
