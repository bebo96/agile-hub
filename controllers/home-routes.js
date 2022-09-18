const router = require('express').Router();

// router.get('/login', (req, res) => {
//   res.render('login');
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/', (req, res) => {
  console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log(req.session);
  
});


module.exports = router;