import TProduct from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductsFromDB,
};
