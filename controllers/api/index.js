const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const taskRoutes = require('./task-routes.js');
const commentRoutes = require('./comment-routes');
const projectRoutes = require('./project-routes');

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/comments', commentRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
