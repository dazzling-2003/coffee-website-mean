import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, default: "", trim: true },
    fulfillment: { type: String, enum: ["Pickup", "Delivery"], default: "Pickup" },
    address: { type: String, default: "" },
    notes: { type: String, default: "" }
  },
  items: [{
    productId: { type: String, default: "" },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 },
    image: { type: String, default: "" }
  }],
  subtotal: { type: Number, required: true, min: 0 },
  deliveryFee: { type: Number, default: 0, min: 0 },
  total: { type: Number, required: true, min: 0 },
  status: { type: String, default: "Received" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
