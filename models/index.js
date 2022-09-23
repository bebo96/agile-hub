// import all models
const Project = require('./Project');
const User = require('./User');
// const Vote = require('./Vote');
const Task = require('./Task');

// create associations
User.hasMany(Project, {
  foreignKey: 'user_id'
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Task.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Task.belongsTo(Project, {
  foreignKey: 'project_id',
  onDelete: 'SET NULL'
});

User.hasMany(Task, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Project.hasMany(Task, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Task };