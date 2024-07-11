import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.createProductIntoDB(req.body);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getProductsFromDB(req.query);
    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getSingleProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductServices.getSingleProductsFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductServices.updateProductIntoDB(id, req.body);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const deleteProductProducts = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductServices.deleteProductFromDB(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProducts,
  deleteProductProducts,
  updateProduct,
};
