import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

//１．ルートコンポーネントを定義します
//２．各ルートは一つのコンポーネントとマッピングさせます
//３．ルーターインスタンスを作成して、ルートオプションを渡します

const routes = [
  //メインルート
  {
    path: "/",
    component: Main,
    children: [
      //サブルート
      { path: "/home", component: Home },
      { path: "/user", component: User },
    ],
  },
];

const router = new VueRouter({
  routes, // `routes: routes` の短縮表記
});

export default router;
