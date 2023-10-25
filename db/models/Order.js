import mongoose from "mongoose";
import Menu from "./Menu";

const { Schema } = mongoose;

const orderSchema = new Schema({
  //populate menu here
  items: { type: [Schema.Types.ObjectId], ref: "Menu" },

  // total: { type: Number, required: true },
  //populate user here
  orderPlacedBy: { type: Schema.Types.ObjectId, ref: "User" },
  createdOn: { type: Date, default: Date.now },
  // status: { type: String, default: 'inProgress' }
});

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;