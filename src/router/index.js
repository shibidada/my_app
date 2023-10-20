import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

//１．ルートコンポーネントを定義します
//２．各ルートは一つのコンポーネントとマッピングさせます
//３．ルーターインスタンスを作成して、ルートオプションを渡します

const routes = [
  //メインルート
  {
    path: "/",
    component: Main,
    name: "Main",
    redirect: "/home", //リダイレクト
    children: [
      // //サブルート
      // { path: "home", name: "home", component: Home }, //ホームページ
      // { path: "user", name: "user", component: User }, //ユーザー管理
      // { path: "mall", name: "mall", component: Mall }, //商品管理
      // { path: "page1", name: "page1", component: PageOne }, //ページ１
      // { path: "page2", name: "page2", component: PageTwo }, //ページ２
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  routes, // `routes: routes` の短縮表記
});

export default router;
