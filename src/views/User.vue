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
            <el-option label="男性" :value="1"></el-option>
            <el-option label="女性" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生年月日" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="生年月日を選択してください"
            value-format="yyyy-MM-DD"
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
      <el-button style="height: 70%" type="primary" @click="handleAdd">
        ＋　新規
      </el-button>
      <!-- form検索域 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input
            placeholder="氏名を入力してください"
            v-model="userForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">検索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="common-table">
      <el-table stripe height="90%" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="氏名"> </el-table-column>
        <el-table-column prop="sex" label="性別">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{
              scope.row.sex == 1 ? "男性" : "女性"
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
      <div class="pager">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handlePage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { addUser, getUser, editUser, delUser } from "../api";
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
      modalType: 0, //0:新規ダイアログ　1:編集
      total: 0, //データの総件数
      pageData: {
        page: 1,
        limit: 10,
      },
      userForm: {
        name: "",
      },
    };
  },
  methods: {
    //ユーザー情報のフォームを提出
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          //引き続き、データを処理
          if (this.modalType === 0) {
            addUser(this.form).then(() => {
              //改めてユーザーリストを獲得して更新
              this.getList();
            });
          } else {
            editUser(this.form).then(() => {
              //改めてユーザーリストを獲得して更新
              this.getList();
            });
          }
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
    handleEdit(row) {
      this.modalType = 1;
      this.dialogVisible = true;
      //注意！該当行のデータをディープコピーすべき。
      //直接 this.form = row; なら、rowのデータが改ざんされてしまう。
      this.form = JSON.parse(JSON.stringify(row));
    },
    handleDelete(row) {
      this.$confirm(
        "この操作はファイルを永久に削除する, 引き続き行いますか?",
        "注意",
        {
          confirmButtonText: "はい",
          cancelButtonText: "キャンセル",
          type: "warning",
        }
      )
        .then(() => {
          delUser({ id: row.id }).then(() => {
            this.$message({
              type: "success",
              message: "削除成功!",
            });
            //改めてユーザーリストを獲得して更新
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "削除を中止しました。",
          });
        });
    },
    handleAdd() {
      this.modalType = 0;
      this.dialogVisible = true;
    },
    getList() {
      //ユーザーリストを獲得
      getUser({ params: { ...this.userForm, ...this.pageData } }).then(
        ({ data }) => {
          console.log(data);
          this.tableData = data.list;
          this.total = data.count || 0;
          this.getList();
        }
      );
    },
    //ページ番号を選ぶ時のコールバック
    handlePage(val) {
      // console.log(val, "val");
      this.pageData.page = val;
    },
    //リストの検索
    onSubmit() {
      this.getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>
<style lang="less" scoped>
.manage {
  height: 90%;
  .manage-header {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .common-table {
    position: relative;
    height: calc(100% - 62px);
    .pager {
      position: absolute;
      bottom: 0;
      right: 20px;
    }
  }
}
</style>
