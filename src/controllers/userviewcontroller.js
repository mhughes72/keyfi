
// const {UserView} = require("../models/userView")

const UserView = require("../models/userView")

const mongoose = require("mongoose")
const db = mongoose.connection
var moment = require('moment');
const { ERR_STATUS, ERR_CODE } = require('../constants/constant')



const getTotalUsers = async function (req, res) {
console.log('hey 1: ', req.body.startdate)
console.log('hey 2: ', req.body.enddate)
    await UserView
        .find({ viewDate: { $gte: req.body.startdate, $lte: req.body.enddate } },
            function (err, result) {
                if (err != null) {
                    res.status(ERR_STATUS.Bad_Request).json({
                        error: err
                    });
                } else {
                    res.json({
                        err_code: ERR_CODE.success,
                        userIds: result
                    });
                }
            }
        )

}

const getUniqueUsers = async function (req, res) {
    await UserView
        .find({ viewDate: { $gte: req.body.startdate, $lte: req.body.enddate } })
        .distinct('userId',
            function (err, result) {
                if (err != null) {
                    res.status(ERR_STATUS.Bad_Request).json({
                        error: err
                    });
                } else {
                    res.json({
                        err_code: ERR_CODE.success,
                        userIds: result
                    });
                }
            }
        );
}

const getUserViews = async function (req, res) {

    try {
        const userViews = await UserView.find({})
        res.send(userViews)
    } catch (e) {
        res.status(500).send()
    }

}


const addUserViews = async function (req, res) {
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


