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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="氏名"> </el-table-column>
        <el-table-column prop="sex" label="性別">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{
              scope.row.sex === 1 ? "男性" : "女性"
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年齢"> </el-table-column>
        <el-table-column prop="birth" label="生年月日"> </el-table-column>
        <el-table-column prop="addr" label="住所"> </el-table-column>
        <el-table-column prop="addr" label="住所">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >編集</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >削除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getUser } from "../api";
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
      tableData: [],
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
    handleEdit(row) {},
    handleDelete(row) {},
  },
  mounted() {
    //ユーザーリストを獲得
    getUser().then(({ data }) => {
      console.log(data);
      this.tableData = data.list;
    });
  },
};
</script>
