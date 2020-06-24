import Vue from "vue";
import Router from "vue-router";
// import NavHeader from '@/components/NavHeader'
import index from "../pages/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/submit",
      name: "submit",
      component: () => import("../pages/submit")
    },
    {
      path: "/end",
      name: "end",
      component: () => import("../pages/end")
    },
    {
      path: "/parsing",
      name: "parsing",
      component: () => import("../pages/parsing")
    },
    {
      path: "/ranking",
      name: "ranking",
      component: () => import("../pages/ranking")
    }
  ]
});
