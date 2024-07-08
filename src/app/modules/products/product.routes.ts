import { Router } from "express";
import { ProductControllers } from "./product.controllers";

const router = Router();

router.post("/", ProductControllers.createProduct);

export const ProductRoutes = router;
