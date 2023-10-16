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
  },
};
