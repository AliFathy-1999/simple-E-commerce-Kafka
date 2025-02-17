import mongoose, { Schema, model } from "mongoose";

import IDelivery from "../interfaces/delivery.interface";


const deliverySchema = new Schema<IDelivery>(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        received: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true
    }
);



export default model<IDelivery>('Delivery', deliverySchema);

