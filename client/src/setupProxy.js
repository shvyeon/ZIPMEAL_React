const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/main", {
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );
};
