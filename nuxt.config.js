export default {
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  proxy: {
    "/api/": { target: "api.example.com", pathRewrite: { "^/api/": "" } },
  },
  axios: {},
};
