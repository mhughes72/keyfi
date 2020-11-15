const mongoose = require('mongoose')
const uri = 'mongodb+srv://mhughes:7ant147H@mattcluster.crvln.mongodb.net/well-api?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



