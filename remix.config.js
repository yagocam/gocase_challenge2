/** @type {import('@remix-run/dev').AppConfig} */
export default {
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/", "routes/_index.jsx", { index: true });
      route("/collections", "routes/_collections.jsx");
     
    });
  },
};
