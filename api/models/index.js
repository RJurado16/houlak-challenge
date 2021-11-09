const { Sequelize, DataTypes } = require('sequelize');

const {
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_HOST,
  DB_PORT,
} = require('../utils/config/');

const SearchFactory = require('./Search');
const UserFactory = require('./User');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
  {
    logging: false,
  }
);

const User = UserFactory(sequelize, DataTypes);
const Search = SearchFactory(sequelize, DataTypes);

User.belongsToMany(Search, { through: 'user_search' });
Search.belongsToMany(User, { through: 'user_search' });

module.exports = {
  sequelize,
  User,
  Search,
}