import _ from 'lodash';

export default class BaseController {
  constructor() {
    // should not just by helping common imports
  }

  run = ctx => async source => {
    try {
      return await source();
    } catch (error) {
      console.log(error);
      let response = {
        error: 'unexpected',
        info: null
      };
      ctx.badRequest(response);
    }
  };
}
