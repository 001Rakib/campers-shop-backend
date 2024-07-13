import TProduct from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getProductsFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  //search product
  let searchItem = "";
  const productSearchableFields = ["name", "description"];
  if (query.searchItem) {
    searchItem = query?.searchItem as string;
  }

  const searchQuery = Product.find({
    $or: productSearchableFields.map((field) => ({
      [field]: { $regex: searchItem, $options: "i" },
    })),
  });

  //filtering
  const excludeFields = ["searchItem", "sort"];
  excludeFields.forEach((elem) => delete queryObj[elem]);

  const filterQuery = searchQuery.find(queryObj);

  //sorting by price
  let sort = "__v";
  if (query.sort) {
    sort = query.sort as string;
  }

  const result = await filterQuery.sort(sort);

  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload);
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
  updateProductIntoDB,
};
