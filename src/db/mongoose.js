const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1:27017/well-api'
// const uri = 'mongodb://127.0.0.1:27017/task-manager'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



