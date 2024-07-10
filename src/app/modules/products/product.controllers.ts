import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const result = await ProductServices.createProductIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Product created successfully",
    data: result,
  });
};
const getProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getProductsFromDB(req.query);
  res.status(200).json({
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
};
const getSingleProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductsFromDB(id);
  res.status(200).json({
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
};
const deleteProductProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductFromDB(id);
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
};
export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProducts,
  deleteProductProducts,
};
