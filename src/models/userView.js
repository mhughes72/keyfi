const { Schema, model } = require("mongoose");

const userViewSchema = new Schema({

    userId: { 
        type: String, 
        required: true,
        index: true
    },

    viewDate: { 
        type: Date
    },

    productId: { 
        type: String, 
    }

});

const UserView = new model("UserView", userViewSchema);

module.exports = UserView
