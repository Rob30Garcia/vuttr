import Sequelize from 'sequelize';

import User from '../app/models/User';
import Tool from '../app/models/Tool';

import databaseConfig from '../config/database';

const models = [User];
const tools = [Tool];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    tools.map((tool) => tool.init(this.connection));
    tools.map((tool) => tool.associate(this.connection.models));
    models.map((model) => model.associate(this.connection.models));
  }
}

export default new Database();
