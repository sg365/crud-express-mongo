const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ProductSchema = Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Product = model('Product', ProductSchema);
module.exports = Product;
//export default model("Product", ProductSchema);