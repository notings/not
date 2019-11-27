"use strict";

var express = require('express');

var router = express.Router();

var _require = require('../db/db'),
    find = _require.find,
    update = _require.update;
/* GET home page. */


router.get('/userinfo', function _callee(req, res, next) {
  var _req$query, username, password, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _req$query = req.query, username = _req$query.username, password = _req$query.password;
          console.log(req.query);
          _context.next = 5;
          return regeneratorRuntime.awrap(find('userinfo', {
            username: username,
            password: password
          }).then(function (data) {
            if (data.length >= 1) {
              res.send('1');
            } else {
              res.send('0');
            }
          }));

        case 5:
          data = _context.sent;
          res.json(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/infos', function _callee2(req, res, next) {
  var username, data;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          username = req.query.username;
          console.log(req.query);
          console.log(username);
          _context2.next = 6;
          return regeneratorRuntime.awrap(find('infos', {
            name: username
          }));

        case 6:
          data = _context2.sent;
          res.json(data); // console.log(data)

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/setpas', function _callee3(req, res, next) {
  var _req$query2, userst, newpas, data;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _req$query2 = req.query, userst = _req$query2.userst, newpas = _req$query2.newpas;
          console.log(req.query);
          _context3.next = 5;
          return regeneratorRuntime.awrap(update('userinfo', {
            username: userst
          }, {
            password: newpas
          }));

        case 5:
          data = _context3.sent;

          if (data.result.ok === 1) {
            res.send('1');
          } else {
            res.send('0');
          }

          console.log(data); // res.json(data);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.get('/learns', function _callee4(req, res, next) {
  var data;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          res.append('Access-Control-Allow-Origin', '*');
          _context4.next = 3;
          return regeneratorRuntime.awrap(find('learns'));

        case 3:
          data = _context4.sent;
          res.json(data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
module.exports = router;