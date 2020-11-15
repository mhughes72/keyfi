
const UserView = require("../models/userView")
const { ERR_STATUS, ERR_CODE } = require('../constants/constant')


// EFFICIENCY STEPS
// Using lean() to skip several conversion steps for speed.  Comes with several downsides
// that may or may not be relevant depending on requirements
const getTotalUsers = async function (req, res) {

    // Return all documents between startdata and enddate
    await UserView
        .find({ viewDate: { $gte: req.body.startdate, $lte: req.body.enddate } },
            function (err, result) {
                if (err != null) {
                    res.status(ERR_STATUS.Bad_Request).json({
                        error: err
                    });
                } else {
                    console.log(res)
                    res.json({
                        err_code: ERR_CODE.success,
                        userIds: result
                    });
                }
            }
        ).lean()

}

const getUniqueUsers = async function (req, res) {

    // Return all documents with unique userIds between startdata and enddate
    await UserView
        .find({ viewDate: { $gte: req.body.startdate, $lte: req.body.enddate } })
        .distinct('userId',
            function (err, result) {
                if (err != null) {
                    res.status(ERR_STATUS.Bad_Request).json({
                        error: err
                    });
                } else {
                    console.log('RES: ', res)
                    res.json({
                        err_code: ERR_CODE.success,
                        userIds: result
                    });
                }
            }
        ).lean()
}

const getUserViews = async function (req, res) {

    // Return all documents
    try {
        const userViews = await UserView.find({})
        res.send(userViews)
    } catch (e) {
        res.status(500).send()
    }

}

const addUserViews = async function (req, res) {

    // Add a documents
    const userView = new UserView(req.body)
    try {
        await userView.save()
        res.status(201).send(userView)
    } catch (e) {
        res.status(400).send(e)
    }

}

module.exports = {
    getUserViews,
    addUserViews,
    getTotalUsers,
    getUniqueUsers

}


