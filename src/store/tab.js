export default {
  state: {
    isCollapse: false, //左側メニューの繰り広げまたは畳みの状態を決める
  },
  mutations: {
    //左側メニューの繰り広げと畳むを操作するメソッド
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
};
