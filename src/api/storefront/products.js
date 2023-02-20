export const products = (router) => {
  router.get("/storefront/products", async (req, res) => {
    const productService = req.scope.resolve("productService");

    res.json({
      products: await productService.list({}, {}),
    });
  });
};
