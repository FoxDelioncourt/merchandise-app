import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExternalProductView from "../views/ExternalProductView.vue";
import ProductsListView from "../views/ProductsListView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      props: true,
      startPlay: false
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // alias: "/about",
    //   component: AboutView,
    //   props: true
    // },
    {
      path: "/products/:product",
      name: "products",
      component: ExternalProductView
    },
    {
      path: "/list",
      name: "list",
      component: ProductsListView
    }
  ]
});
