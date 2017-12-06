var express = require("express");
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post("/result", function (req, res) {
// var input {
//     name:
//     photo:
//     answersArray: [
//         {question: 
//         mark: }, ...

//     ]
// };
input = req.body;
console.log(input);


// var output {
//     name:
//     photo:
// }
// var output = {match: {name: input.name}};
// res.json(output)
// res.send(output);
})

module.exports = router;