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


//get the last 10 latest post by incident name

var getLatest = function(req, res, next) {
    var incName = req.params.incName;
    console.log("Finding posts by param incName:  " + incName);
    Post.find({ 'incidentName': incName }).sort({ $natural: 1 }).limit(10).exec(function(err, posts) {
        if (err) {

            next(err);
        } else {

            res.json(posts);
        }
    });

    //     console.log("Emitting Update...");
    //     socket.emit("Update", posts.length);
    //     console.log("Update Emmited");
    // });
}

module.exports = {
    getPost: getPost,
    savePost: savePost,
    getAll: getAll,
    getLatest: getLatest


}