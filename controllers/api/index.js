const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const projectRoutes = require('./project-routes');
const taskRoutes = require('./task-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/tasks', taskRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
