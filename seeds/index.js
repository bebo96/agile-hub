const seedUsers = require('./user-seeds');
const seedProjects = require('./project-seeds');
const seedTasks = require('./task-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();

  await seedProjects();

  await seedTasks();

  process.exit(0);
};

seedAll();
