import Vue from "vue";
import Router from "vue-router";
// import NavHeader from '@/components/NavHeader'
import check from "../pages/check";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "check",
      component: check
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../pages/home")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../pages/index")
    },
    {
      path: "/submit",
      name: "submit",
      component: () => import("../pages/submit")
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
