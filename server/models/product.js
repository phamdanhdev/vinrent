import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  images: [String],
  province: { type: String, require: true },
  district: { type: String, require: true },
  type: { type: String, require: true },
  kind: { type: String, require: true },
  title: { type: String, require: true },
  room: { type: Number, require: true },
  toilet: { type: Number, require: true },
  size: { type: Number, require: true },
  street: { type: Number, require: true },
  document: { type: String, require: true },
  direction: { type: String, require: true },
  price: { type: String, require: true },
  views: { type: Number, require: true },
  description: { type: String, require: true },
});

export default mongoose.model("Product", productSchema);
