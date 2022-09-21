const router = require('express').Router();
const { Task, User , Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {

  Task.findAll({
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'task_url',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'task_id', 'user_id', 'created_at'],
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
});

// get a single task
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'task_url', 'title', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbTaskData => {
      if (!dbTaskData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// create a task
router.post('/', (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Task.create({
    title: req.body.title,
    task_url: req.body.task_url,
    user_id: req.body.user_id
  })
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Edit task title
router.put('/:id', (req, res) => {
  Task.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbTaskData => {
      if (!dbTaskData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// Delete a task
router.delete('/:id', (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTaskData => {
      if (!dbTaskData) {
        res.status(404).json({ message: 'No task found with this id' });
        return;
      }
      res.json(dbTaskData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;