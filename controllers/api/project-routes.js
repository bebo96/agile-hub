const router = require('express').Router();
const { Project } = require('../../models');
  

router.get('/', (req, res) => {

  Project.findAll({
    attributes: ['id', 'project_name', 'project_description', 'user_id'],
  })
    .then(dbProjectData => res.json(dbProjectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {

    Project.create({
        project_name: req.body.project_name,
        project_description: req.body.project_description,
        user_id: req.body.user_id
      })
        .then(dbProjectData => res.json(dbProjectData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });

});

router.delete('/:id', (req, res) => {

});

module.exports = router;