const User = require("./User");
const Task = require("./Task");

// create associations
User.hasMany(Task, {
    foreignKey: 'user_id'
});

Task.belongsTo(User, {
    foreignKey: 'user_id',
});
  

module.exports = { User, Task };