var express = require("express");
var friends = require("../data/friends")
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

router.post("/result", function (req, res) {
    var input = req.body;
    var minMatchScore = 999;
    var bestFriend = 0;
    for (var i = 0; i < friends.length; i++) {
        var matchScore = 0;
        for (var j = 0; j < input.scores.length; j++) {            
            var diff = Math.abs(friends[i].scores[j] - input.scores[j]);
            matchScore += diff;
        }
        if (matchScore < minMatchScore) {
            minMatchScore = matchScore;
            bestFriend = i;
        };
    }
    var output = {
        name: friends[bestFriend].name,
        photo: friends[bestFriend].photo
    }
    res.send(output);
})

module.exports = router;