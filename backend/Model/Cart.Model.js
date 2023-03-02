const { Schema, model } = require("mongoose");

const cartSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    productId: { type: Schema.Types.ObjectId, ref: 'product' },
    qty: { type:Number }

}, {
    versionKey: false
})

const CartModel = model('cart', cartSchema);

module.exports ={CartModel};