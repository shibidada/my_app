<template>
  <div class="manage">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <!-- ユーザー情報のフォーム -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="form"
        label-width="85px"
      >
        <el-form-item label="氏名" prop="name">
          <el-input
            placeholder="氏名を入力してください"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="年齢" prop="age">
          <el-input
            placeholder="年齢を入力してください"
            v-model="form.age"
          ></el-input>
        </el-form-item>
        <el-form-item label="性別" prop="sex">
          <el-select v-model="form.sex" placeholder="選択してください">
            <el-option label="男性" value="1"></el-option>
            <el-option label="女性" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生年月日" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="生年月日を選択してください"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="住所" prop="addr">
          <el-input
            placeholder="住所を入力してください"
            v-model="form.addr"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">キャンセル</el-button>
        <el-button type="primary" @click="submit">確認</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button @click="dialogVisible = true" type="primary">
        ＋　新規
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "氏名を入力してください" }],
        age: [{ required: true, message: "年齢を入力してください" }],
        sex: [{ required: true, message: "性別を選択してください" }],
        birth: [{ required: true, message: "生年月日を選択してください" }],
        addr: [{ required: true, message: "住所を入力してください" }],
      },
    };
  },
  methods: {
    //ユーザー情報のフォームを提出
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          //引き続き、データを処理

          //入力したデータをリセット
          this.$refs.form.resetFields();
          //ダイアログを閉じる
          this.dialogVisible = false;
        }
      });
    },
    //ダイアログを閉じたら、入力したデータをリセット
    handleClose() {
      this.$refs.form.resetFields();
      this.dialogVisible = false;
    },
    cancel() {
      this.handleClose();
    },
  },
};
</script>
