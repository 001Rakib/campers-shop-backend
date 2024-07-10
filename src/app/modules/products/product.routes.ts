import { Router } from "express";
import { ProductControllers } from "./product.controllers";

const router = Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getProducts);
router.get("/:id", ProductControllers.getSingleProducts);
router.delete("/:id", ProductControllers.deleteProductProducts);

export const ProductRoutes = router;
