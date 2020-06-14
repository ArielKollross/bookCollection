const User = require('../model/User');

module.exports = {
  post(req, res) {

    User.create(req.body, (userId) =>  res.json({"sucesses": 'true', userId}));
  },
}