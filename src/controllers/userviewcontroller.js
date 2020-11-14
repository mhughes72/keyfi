
// const {UserView} = require("../models/userView")

const UserView = require("../models/userView")

const mongoose = require("mongoose")
const db = mongoose.connection
var moment = require('moment');
const { ERR_STATUS, ERR_CODE } = require('../constants/constant')



const getTotalUsers = async function (req, res) {

    await UserView
        .find({ viewDate: { $gte: '1960-10-19', $lte: '1987-10-26' } })
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

const getUniqueUsers = async function (req, res) {
    console.log('req 3: ', req.body.startdate);
    console.log('req 4: ', req.body.enddate);
    console.log('getUniqueUsers: ');
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


