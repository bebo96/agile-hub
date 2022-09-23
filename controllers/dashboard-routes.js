const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, User, Task } = require('../models');
const withAuth = require('../utils/auth');

// get all projects for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  Project.findAll({
    where: {
      user_id: req.session.user_id
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
      const projects = dbProjectData.map(project => project.get({ plain: true }));
      res.render('dashboard', { projects, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Project.findByPk(req.params.id, {
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
      if (dbProjectData) {
        const project = dbProjectData.get({ plain: true });
        
        res.render('edit-project', {
          project,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
