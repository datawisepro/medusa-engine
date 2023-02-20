export default (router) => {
  router.get("/", (req, res) => {
    res.send("Server is up and running");
  });
};
