import { Router } from "express";
import serverCheck from "./server-check";
import { product, products } from "./storefront/products";

export default () => {
  const router = Router();

  serverCheck(router);
  products(router);
  product(router);

  return router;
};
