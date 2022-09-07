const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const taskRoutes = require('./task-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
