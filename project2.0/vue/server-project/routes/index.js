var express = require('express');
var router = express.Router();
const {
  find,
  insert
} = require('../db/db');
/* GET home page. */
router.get('/hotapp', async function (req, res, next) { //精选
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('hotapp');
  res.json(data);
});

router.get('/softpopu', async function (req, res, next) { //软件
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('softpopu');
  res.json(data);
});

router.get('/games', async function (req, res, next) { //软件
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('game');
  res.json(data);
});

router.get('/more', async function (req, res, next) { //软件
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('morelist');
  res.json(data);
});

router.get('/listb', async function (req, res, next) { //软件
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('listb');
  res.json(data);
});

router.get('/detailts', async function (req, res, next) { //详情
  res.append('Access-Control-Allow-Origin', '*');
  let ids = req.query.id
  ids = parseInt(ids)
  let data = await find('hotapp', {
    id: ids
  });
  console.log(data);
  res.json(data);
});

router.get('/search', async function (req, res, next) { //详情
  res.append('Access-Control-Allow-Origin', '*');

  let names = req.query.values
  let data = await find('hotapp', {
    name: names
  });
  console.log(data);
  res.json(data);

});


router.post('/register', async function (req, res, next) { //注册
  res.append('Access-Control-Allow-Origin', '*');
  let sum = req.body;
  // console.log(req.body)
  let data = await find('verify', {
    user: sum.user
  });

  if (sum.user) {
    if (!data) {
      res.send('4')
    } else {
      if (sum.password.length<6) {
        res.send('6')
      } else if (sum.password == sum.repassword) {
        await insert('verify', [{
          user: sum.user,
          password: sum.password,
        }])
        res.send('200')
      } else {
        res.send('3')
      }
    }
  } else {
    res.send('1')
  }

  // if (sum.user) {
  //   if (!data) {
  //     res.send('4')
  //   } else {      
  //     if (sum.password == sum.repassword) {
  //       await insert('verify', [{
  //         user: sum.user,
  //         password: sum.password,
  //       }])
  //       res.send('200')
  //     } else {
  //       res.send('3')
  //     }
  //   }
  // } else {
  //   res.send('1')
  // }
  res.json(data);
});


router.post('/Login', async function (req, res, next) { //登录
  res.append('Access-Control-Allow-Origin', '*');
  let {
    user,
    password
  } = req.body;
  console.log(req.body)
  await find('verify', {
    user
  }).then(function (data) {

    if (data.length >= 1) {

      if (data[0].password == password) {
        res.send('7')
      } else {
        res.send('2')
      }
    } else {
      res.send('2')
    }
  });
});


module.exports = router;