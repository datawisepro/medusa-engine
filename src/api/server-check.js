export default (router) => {
  router.get("/", (req, res) => {
    console.log("server is up an running");
    res.send("Server is up and running");
  });
};
