import _ from 'lodash';
import articledb from '../models/mysql/articles-bursa';
import Sequalize from 'sequelize';

export default new (class MiscController {
  constructor() { }


  async filter(filters, { page, per_page }) {
    const model = articledb['bursa_articles'];
    const Op = Sequalize.Op;
    const conditions = [];
    let pipline = {};

    for (let [key, value] of _.entries(filters)) {
      if (!value || value === 'null') { continue; }

      switch (key) {
        case 'search':
          conditions.push({ company_name: { [Op.like]: `%${value}%` } })
          conditions.push({ title: { [Op.like]: `%${value}%` } })
          conditions.push({ url: { [Op.like]: `%${value}%` } })
          break;

      }
    }

    if (conditions.length) {
      pipline = { where: { [Op.or]: conditions } }
    }

    const all = await model.findAll(pipline);
    const data = await model.findAll({
      ...pipline,
      order: [
        ['publish_at', 'DESC'],
      ], offset: ((+page - 1) * +per_page), limit: +per_page,
    });
    return { data, paginate: { total: all.length, page: +page, per_page: +per_page } };
  }

  async insertError(err) {
  }

})();
