const { default: mongoose } = require("mongoose");

const ProducES = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

const Product = new mongoose.model("Product", ProducES);
module.exports = Product;
