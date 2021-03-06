import express from 'express'
import expressAsyncHandler from "express-async-handler/index";
import {isAuth} from "../utils";
import Order from "../models/orderModel";

const orderRouter = express.Router()

orderRouter.get('/:id', isAuth, expressAsyncHandler(async (req,res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        res.send(order)
    } else {
        res.status(404).send({message: 'Order Not Found'})
    }
}))

orderRouter.post('/', isAuth, expressAsyncHandler(async (req, res) => {
    const order = new Order({
        orderItems: req.body.orderItems,
        user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice
    })
    const createOrder = await order.save()
    res.status(201).send({message: 'Order is Created', order: createOrder})
}))

export default orderRouter
