var data = require("../data/required.json");

exports.addComment = function(request, response) {
    let changedCourse;

	data[request.query.type].forEach(function(course) {
        if (course.id === request.query.id) {
            course.evals.push(request.query.comment);
            changedCourse = course;
        }
    })

	response.json(changedCourse);
};