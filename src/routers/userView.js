const express = require('express')
const UserView = require('../models/userView')
const router = new express.Router()
const {getUserViews, addUserViews, getTotalUsers, getUniqueUsers} = require('../controllers/userviewcontroller')


// router.post('/userViews', async (req, res) => {
//     const userView = new UserView(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

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



// router.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const task = await Task.findById(_id)

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/tasks/:id', async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if (!task) {
//             res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router