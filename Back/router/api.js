var mongo = require('mongodb').MongoClient;
var vsprintf = require('sprintf').vsprintf;

module.exports = {
    getStrings: function(req, res) {
        var language = req.params.language;
        var lesson = req.params.lesson;

        mongo.connect('mongodb://localhost:27017/a2a', (err, db) => {
            if (err) {
                console.log(err);
            } else {
                db.collection('resString').findOne({
                    'language': language,
                    'lesson': lesson
                }, (err, ele) => {
                    res.json(ele.strings);
                });
            }
        });
    },
};
