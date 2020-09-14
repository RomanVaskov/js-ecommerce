import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true},
        qty: {type: Number, required: true},
        product: {type: mongoose.Schema.Types.ObjectID, ref: 'Product', required: true}
    }],
    user: {type: mongoose.Schema.Types.ObjectID, ref: 'User', required: true},
    shipping: {
        address: String,
        city: String,
        postal: String,
        country: String,
    },
    payment: {
        paymentMethod: String,
        paymentResult: {
            orderId: String,
            payerId: String,
            paymentId: String,
        }
    },
    itemsPrice: Number,
    taxPrice: Number,
    shippingPrice: Number,
    totalPrice: Number,
    isDelivered: {type: Boolean, required: true, default: false},
    deliveredAt: Date
}, {
    timestamps: true
})
const Order = mongoose.model('Order', orderSchema)
export default Order
