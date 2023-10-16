<template>
  <div class="manage">
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <!-- ユーザー情報のフォーム -->
      <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="氏名">
          <el-input
            placeholder="氏名を入力してください"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="年齢">
          <el-input
            placeholder="年齢を入力してください"
            v-model="form.age"
          ></el-input>
        </el-form-item>
        <el-form-item label="性別">
          <el-select v-model="form.sex" placeholder="選択してください">
            <el-option label="男性" value="1"></el-option>
            <el-option label="女性" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生年月日">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="年月日を選択してください"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="住所">
          <el-input
            placeholder="住所を入力してください"
            v-model="form.addr"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">キャンセル</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >確認</el-button
        >
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
    };
  },
};
</script>
