<template>
  <el-form
    ref="form"
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
      <el-button
        @click="submit"
        style="margin-left: 150px; margin-top: 10px"
        type="primary"
        >ログイン</el-button
      >
    </el-form-item>
  </el-form>
</template>
<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api";
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
  methods: {
    //ログイン
    submit() {
      //   //token
      //   const token = Mock.Random.guid();

      //バリデーション通過
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
            console.log(data);
            if (data.code === 20000) {
              //tokenの情報をcookieの中に保存して、各画面の間に通信できるようにします
              Cookie.set("token", data.data.token);

              //左側メニューのデータを獲得して、storeの中に保存します
              this.$store.commit("setMenu", data.data.menu);
              this.$store.commit("addMenu", this.$router);
              //ホームページに遷移します
              this.$router.push("/home");
            } else {
              this.$message.error(data.data.message);
            }
          });
        }
      });
    },
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
