import { Router } from "express";
import serverCheck from "./server-check";
import { product, products } from "./storefront/products";

const storeCorsOptions = {
  origin: projectConfig.store_cors,
  credentials: true,
};

export default () => {
  const router = Router();

  serverCheck(router);
  products(router);
  product(router);

  return router;
};
