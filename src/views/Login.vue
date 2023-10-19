<template>
  <el-form
    label-width="120px"
    :inline="true"
    class="login-container"
    :model="form"
    :rules="rules"
  >
    <h3 class="login_title">ログイン</h3>
    <el-form-item label="アカウント名" prop="username">
      <el-input
        v-model="form.username"
        placeholder="アカウント名を入力してください"
      ></el-input>
    </el-form-item>
    <el-form-item label="パスワード" prop="password">
      <el-input
        type="password"
        v-model="form.password"
        placeholder="パスワードを入力してください"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="margin-left: 150px; margin-top: 10px" type="primary"
        >ログイン</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "アカウント名を入力してください",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "パスワードを入力してください",
          },
        ],
      },
    };
  },
};
</script>
<style lang="less" scoped>
.login-container {
  width: 480px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6;
  box-sizing: border-box;
  .login_title {
    text-align: center;
    margin-bottom: 40px;
    color: #505458;
  }
  .el-input {
    width: 260px;
  }
}
</style>
