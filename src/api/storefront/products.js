export const products = (router) => {
  router.get("/store/products", async (req, res) => {
    const productService = req.scope.resolve("productService");
    res.json(await productService.list({}, {}));
  });
};

export const product = (router) => {
  router.get("/store/products/:id", async (req, res) => {
    const productService = req.scope.resolve("productService");
    const { id } = req.params;

    res.json(await productService.retrieve(id));
  });
};
