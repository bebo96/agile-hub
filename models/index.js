const User = require("./User");
const Task = require("./Task");
const Comment = require("./Comment");

// create associations
User.hasMany(Task, {
    foreignKey: 'user_id'
});

Task.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Task, {
  foreignKey: 'task_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Task.hasMany(Comment, {
  foreignKey: 'task_id'
});

module.exports = { User, Task , Comment };