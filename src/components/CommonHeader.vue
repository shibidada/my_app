<template>
  <div class="header-container">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini"></el-button>
      <!-- パンくずリスト -->
      <span class="text">ホームページ</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/usericon.jpeg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>マイページ</el-dropdown-item>
          <el-dropdown-item>ログアウト</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
