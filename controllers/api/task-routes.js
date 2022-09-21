const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Task.findAll()
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Task.create({
    task_text: req.body.task_text,
    user_id: req.session.user_id,
    project_id: req.body.project_id
  })
    .then(dbTaskData => res.json(dbTaskData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTaskData => {
      if (!dbTaskData) {
        res.status(404).json({ message: 'No task found with this id!' });
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
