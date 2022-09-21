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

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

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