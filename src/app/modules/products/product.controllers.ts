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
export const ProductControllers = {
  createProduct,
};
