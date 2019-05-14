// Dependencies

var friendsData = require("../data/friends")


module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    })

    app.post("/api/friends", (req, res) => {
        console.log(req.body)
        friendsData.push(req.body)

        // all the math
        //compare friendsData to req.body

        


    })

}

