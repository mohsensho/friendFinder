var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 100
        };

        var userData = req.body;
        var userScores = userData.scores;
        
        var userName = userData.name;
        var userPhoto = userData.photo;

        let userScoreTotal = 0;
        for (var i = 0; i < userScores.length; i++) {
            userScoreTotal += parseInt(userScores[i]);
        }
        userScores.push(userScoreTotal);
        //console.log(userScores);
        let eachUserDifference = 0;
        //console.log(" friend length: " + friends.length);
        
    for (var i = 0; i < friends.length; i++) {
        //console.log(friends[i].name + " --- " + friends[i].scores);
        eachUserDifference = Math.abs(parseInt(userScores[10]) - parseInt(friends[i].scores[10]));
        //console.log(" friendDifference: "+bestMatch.friendDifference);
        if (eachUserDifference <= bestMatch.friendDifference) {
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = eachUserDifference;
        }
    }
    //console.log("Best Match"+bestMatch.name + bestMatch.friendDifference);

    //friends.push({userName, userPhoto, userScores});
    
    res.json(bestMatch);
    });
};