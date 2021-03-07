var userData = require('../data/user.json');

exports.setName = function(request, response) {
    userData.name = request.query.name;

    response.json(userData);
}