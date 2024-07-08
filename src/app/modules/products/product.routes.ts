import { Router } from "express";
import { ProductControllers } from "./product.controllers";

const router = Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getProducts);

export const ProductRoutes = router;
