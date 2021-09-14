import _ from 'lodash';
import moment from 'moment-timezone';
import Sequelize from 'sequelize';
import SequelizeUniqueConstraintError from 'sequelize/lib/errors/validation/unique-constraint-error.js';

const { Model } = Sequelize;

export default class BaseModel extends Model {
  static init(attributes, options) {
    const model = super.init(attributes, options);
    return model;
  }
}