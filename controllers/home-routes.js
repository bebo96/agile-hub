const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Task } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Project.findAll({
    attributes: [
      'id',
      'customer_name',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Task,
        attributes: ['id', 'task_text', 'project_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProjectData => {
      const projects = dbProjectData.map(project => project.get({ plain: true }));

      res.render('homepage', {
        projects,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/project/:id', (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'customer_name',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Task,
        attributes: ['id', 'task_text', 'project_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbProjectData => {
      if (!dbProjectData) {
        res.status(404).json({ message: 'No project found with this id' });
        return;
      }

      const project = dbProjectData.get({ plain: true });

      res.render('single-project', {
        project,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
