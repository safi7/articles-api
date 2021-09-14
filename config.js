
import moment from 'moment-timezone';

require('dotenv').config();

moment.tz.setDefault('UTC');
moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss';
moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss';

export default {
  mysql_name: process.env.DB_MYSQL_NAME,
  mysql_host: process.env.DB_MYSQL_HOST,
  mysql_port: +process.env.DB_MYSQL_PORT,
  mysql_user: process.env.DB_MYSQL_USERNAME,
  mysql_pass: process.env.DB_MYSQL_PASSWORD,
};
