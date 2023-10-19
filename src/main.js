import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import "./api/mock";
import Cookie from "js-cookie";

Vue.config.productionTip = false;
Vue.use(ElementUI);

//グローバルビフォーガード
router.beforeEach((to, from, next) => {
  //tokenがあるかどうかを判断
  const token = Cookie.get("token");
  //tokenがないので、該当ユーザーがまだ登録していない。その時、ログイン画面に遷移します。
  if (!token && to.name !== "login") {
    next({ name: "login" });
  } else if (token && to.name === "login") {
    //tokenがある、該当ユーザーがまだ登録済み。その時、ホームページに遷移します。
    next({ name: "home" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
