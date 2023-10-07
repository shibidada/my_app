import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Main from "../views/Main.vue";
import Mall from "../views/Mall.vue";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

Vue.use(VueRouter);

//１．ルートコンポーネントを定義します
//２．各ルートは一つのコンポーネントとマッピングさせます
//３．ルーターインスタンスを作成して、ルートオプションを渡します

const routes = [
  //メインルート
  {
    path: "/",
    component: Main,
    redirect: "/home", //リダイレクト
    children: [
      //サブルート
      { path: "/home", component: Home }, //ホームページ
      { path: "/user", component: User }, //ユーザー管理
      { path: "/mall", component: Mall }, //商品管理
      { path: "/page1", component: PageOne }, //ページ１
      { path: "/page2", component: PageTwo }, //ページ２
    ],
  },
];

const router = new VueRouter({
  routes, // `routes: routes` の短縮表記
});

export default router;
