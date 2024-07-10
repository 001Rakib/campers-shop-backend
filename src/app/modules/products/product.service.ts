import TProduct from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getProductsFromDB = async (query: Record<string, unknown>) => {
  //search product
  let searchItem = "";
  const productSearchableFields = ["name", "description"];

  if (query) {
    searchItem = query?.searchItem as string;
  }

  if (searchItem) {
    const result = await Product.find({
      $or: productSearchableFields.map((field) => ({
        [field]: { $regex: searchItem, $options: "i" },
      })),
    });
    return result;
  }

  const result = await Product.find();
  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductsFromDB,
  deleteProductFromDB,
};
