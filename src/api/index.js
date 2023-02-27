import { Router } from "express";
import serverCheck from "./server-check";
import { product, products } from "./storefront/products";
import cors from "cors";
import { projectConfig } from "../../../medusa-config";

const storeCorsOptions = {
  origin: projectConfig.store_cors,
  credentials: true,
};

export default () => {
  const router = Router();
  router.options("store/products", storeCorsOptions);

  serverCheck(router);
  products(router);
  product(router);

  return router;
};
