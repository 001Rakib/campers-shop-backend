import { Router } from "express";
import { ProductRoutes } from "../modules/products/product.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
