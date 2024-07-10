import { model, Schema } from "mongoose";
import TProduct from "./product.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = model<TProduct>("Product", productSchema);
