<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ? "データ" : "データ管理ポータル" }}</h3>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildern"
      :key="item.name"
      :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildern"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      // menuData: [
      //   {
      //     path: "/",
      //     name: "home",
      //     label: "ホームページ",
      //     icon: "s-home",
      //     url: "Home/Home",
      //   },
      //   {
      //     path: "/mall",
      //     name: "mall",
      //     label: "商品管理",
      //     icon: "video-play",
      //     url: "MallManage/MallManage",
      //   },
      //   {
      //     path: "/user",
      //     name: "user",
      //     label: "ユーザー管理",
      //     icon: "user",
      //     url: "UserManage/UserManage",
      //   },
      //   {
      //     label: "ほか",
      //     icon: "location",
      //     children: [
      //       {
      //         path: "/page1",
      //         name: "page1",
      //         label: "ページ１",
      //         icon: "setting",
      //         url: "Other/PageOne",
      //       },
      //       {
      //         path: "/page2",
      //         name: "page2",
      //         label: "ページ２",
      //         icon: "setting",
      //         url: "Other/PageTwo",
      //       },
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //メニューをクリック
    clickMenu(item) {
      console.log(item);
      //現在のルートと遷移先のルートが違う時にだけ、遷移が起こる
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    //サブメニューなしの場合
    noChildern() {
      return this.menuData.filter((item) => !item.children); //childernのないitemを獲得
    },
    //サブメニューありの場合
    hasChildern() {
      return this.menuData.filter((item) => item.children); //childernのあるitemを獲得
    },
    menuData() {
      //該当データがcookieの中にない場合、storeから獲得します。
      return JSON.parse(Cookie.get("menu")) || this.$store.state.tab.menu;
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu {
  border-right: none;
}
</style>
