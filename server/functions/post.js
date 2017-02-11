var Post = require('../schema/post');
// get single room
var getPost = function(req, resp, next) {
    resp.send("GET method");
}

// create single room
var savePost = function(req, res, next) {
    console.log('creating post now');
    var post = new Post(req.body);

    post.save(function(err) {
        if (err) {

            return next(err);
        } else {

            return res.json({
                message: 'Post created!'
            });
        }
    });
}

var getAll = function(req, res, next) {
    Post.find(function(err, posts) {
        if (err) {

            next(err);
        } else {

            res.json(posts);
        }
    });
}


module.exports = {
    getPost: getPost,
    savePost: savePost,
    getAll: getAll,


}