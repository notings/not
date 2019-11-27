var express = require('express');
var router = express.Router();
const {
  find,
  update
} = require('../db/db');
/* GET home page. */
router.get('/userinfo', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {
    username,
    password
  } = req.query;
  console.log(req.query)
  let data = await find('userinfo', {
    username: username,
    password: password
  }).then(function (data) {

    if (data.length >= 1) {
      res.send('1')
    } else {
      res.send('0')
    }
  });
  res.json(data);
});

router.get('/infos', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {username}= req.query
  console.log(req.query);
  console.log(username)
  let data = await find('infos', {
    name: username
  });
  res.json(data);
  // console.log(data)
});

router.get('/setpas', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {
    userst,
    newpas
  } = req.query
  console.log(req.query)
  let data = await update('userinfo', {
    username: userst
  }, {
    password: newpas
  })
  if (data.result.ok === 1) {
    res.send('1')
  } else {
    res.send('0')
  }
  console.log(data)
  // res.json(data);
});

router.get('/learns', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('learns');
  res.json(data);
});

module.exports = router;