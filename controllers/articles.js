import _ from 'lodash';

import BaseController from './base';
import articleM from '../shared/data/articles';

export default new (class TestMatchController extends BaseController {
  constructor() {
    super();
  }

  async fetchArticles(ctx) {
    return this.run(ctx)(async () => {
      const params = ctx.query;
      console.log('params', params);
      const { page, per_page } = params;
      const data = await articleM.filter(_.omit(params, ['page', 'per_page']), { page, per_page });
      ctx.ok({ data });
    });
  }

})();
