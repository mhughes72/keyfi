const mongoose = require('mongoose')
// const uri = 'mongodb://127.0.0.1:27017/well-api'
const uri = 'mongodb+srv://mhughes:7ant147H@mattcluster.crvln.mongodb.net/well-api?retryWrites=true&w=majority'

// const uri = 'mongodb://127.0.0.1:27017/task-manager'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



