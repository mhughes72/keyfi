const express = require('express')
const router = new express.Router()
const {getUserViews, addUserViews, getTotalUsers, getUniqueUsers} = require('../controllers/userviewcontroller')

router.post('/userViews', async (req, res) => {
    addUserViews(req, res)
})

router.get('/userViews', async (req, res) => {
    getUserViews(req, res)
})

router.get('/totalUsers', async (req, res) => {
    getTotalUsers(req, res)
})

router.get('/uniqueUsers', async (req, res) => {
    getUniqueUsers(req, res)
})

module.exports = router