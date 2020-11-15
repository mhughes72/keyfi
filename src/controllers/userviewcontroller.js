
// const {UserView} = require("../models/userView")

const UserView = require("../models/userView")

const mongoose = require("mongoose")
const db = mongoose.connection
var moment = require('moment');
const { ERR_STATUS, ERR_CODE } = require('../constants/constant')

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};


// EFFICIENCY STEPS
// Using lean() to skip several conversion steps for speed.  Comes with several downsides
// that may or may not be relevant depending on requirements
const getTotalUsers = async function (req, res) {

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


