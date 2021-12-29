const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(!req.user) {
      res.redirect('/user/no-permission')
  } else {
      res.render('logged', {name: req.user.displayName, photo: req.user.photos[0].value})
      console.log('req.user.photos', req.user.photos[0].value)
    }
});

router.get('/profile', (req, res) => {
    if(!req.user) {
        res.redirect('/user/no-permission')
    } else res.render('profile')
});

router.get('/profile/settings', (req, res) => {
    if(!req.user) {
        res.redirect('/user/no-permission')
    } else res.render('profileSettings')

});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;