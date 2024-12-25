/** @format */

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    orderId: {
      type: String,
      required: [true, "Provide OrderId"],
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    product_details: {
      name: String,
      image: Array,
    },
    paymentID: {
      type: String,
      default: "",
    },
    paymentStatus: {
      type: String,
      default: "",
    },
    delivey_address: {
      type: mongoose.Schema.ObjectId,
      ref: "Address",
    },
    subTotalAmt: {
      type: Number,
      default: 0,
    },
    totalAmt: {
      type: Number,
      default: 0,
    },
    invoice_receipt: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
