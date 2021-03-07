var requiredData = require('../data/required.json');
var wipData = require('../data/wip.json');
var completedData = require('../data/completed.json');
var userData = require('../data/user.json');


exports.login = function (req, res) {
  res.render('login', { layout: false });
}

exports.required = function (req, res) {
  res.render('required', {
    majors: requiredData.majors,
    minors: requiredData.minors,
    user: userData,
  });
};

exports.completed = function (req, res) {
  res.render('completed', {
    majors: completedData.majors,
    minors: completedData.minors,
    user: userData,
  });
};

// In Progress page
exports.wip = function (req, res) {
  res.render('wip', {
    majors: wipData.majors,
    minors: wipData.minors,
    user: userData,
  });
}

exports.print = function (req, res) {
  res.render('print');
}

exports.journey = function (req, res) {
  res.render('journey');
};

exports.checkpoint = function (req, res) {
  res.render('checkpoint');
};