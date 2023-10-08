import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
Vue.use(Vuex);

//Vuexのインスタンスを作る
export default new Vuex.Store({
  modules: {
    tab,
  },
});
