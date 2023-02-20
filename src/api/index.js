import { Router } from "express";
import serverCheck from "./server-check";
import { products } from "./storefront/products";

export default () => {
  const router = Router();

  serverCheck(router);
  products(router);

  return router;
};
