import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var order = new Schema({
    amount : {
        type: String
    },
    images:{
        type: String
    },
    email:{
        type: String
    }
})

mongoose.models = {};

var Order = mongoose.model('Order', order);

export default Order;