import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema({
  items: [{ itemId: String, qty: Number }],
  orderPlacedBy: { type: String },
  createdOn: { type: Date, default: Date.now },
  status: { type: String, default: 'inProgress' },
  total: { type: Number, required: true }
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;