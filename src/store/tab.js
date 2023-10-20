import Cookie from "js-cookie";
export default {
  state: {
    isCollapse: false, //左側メニューの繰り広げまたは畳みの状態を決める
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "ホームページ",
        icon: "s-home",
        url: "Home/Home",
      },
    ], //パンくずのデータ
    menu: [],
  },
  mutations: {
    //左側メニューの繰り広げと畳むを操作するメソッド
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //パンくずのデータを操作するメソッド
    selectMenu(state, val) {
      if (val.name !== "home") {
        const index = state.tabsList.findIndex(
          (item) => item.name === val.name
        );
        //存在しない場合
        if (index === -1) {
          state.tabsList.push(val);
        }
      }
    },
    //指定したtagのデータを削除するメソッド
    closeTag(state, item) {
      const index = state.tabsList.findIndex((val) => val.name === item.name);
      state.tabsList.splice(index, 1);
    },
    //左側メニューのデータを設定
    setMenu(state, val) {
      state.menu = val;
      Cookie.set("menu", JSON.stringify(val)); //注意：Cookieのデータがstring型である
    },
    //動的ルーターの設定
    addMenu(state, router) {
      //現在のcookieの中にデータがあるかどうかを判断します
      if (!Cookie.get("menu")) return;
      const menu = JSON.parse(Cookie.get("menu"));
      state.menu = menu;
      //動的ルーターのデータを設定します
      const menuArray = [];
      menu.forEach((item) => {
        if (item.children) {
          item.children = item.children.map((item) => {
            item.component = () => import(`../views/${item.url}`);
            return item;
          });
          menuArray.push(...item.children);
        } else {
          item.component = () => import(`../views/${item.url}`);
          menuArray.push(item);
        }
      });
      console.log(menuArray, "menuArray");
      //ルートを動的に添付します
      menuArray.forEach((item) => {
        router.addRoute("Main", item);
      });
    },
  },
};
