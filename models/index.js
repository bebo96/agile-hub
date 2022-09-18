const User = require("./User");
const Task = require("./Task");
const Comment = require("./Comment");
const Project = requre("./Project");

// create associations
User.hasMany(Task, {
    foreignKey: 'user_id'
});

User.hasMany(Project, {
  foreignKey: 'user_id'
});

Project.hasMany(Task, {
  foreignKey: 'project_id'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Task.belongsTo(User, {
  foreignKey: 'user_id'
});

Task.belongsTo(Project, {
  foreignKey: 'project_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Task, {
  foreignKey: 'task_id'
});

Comment.belongsTo(Project, {
  foreignKey: 'project_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Task.hasMany(Comment, {
  foreignKey: 'task_id'
});

module.exports = { User, Task , Comment , Project };